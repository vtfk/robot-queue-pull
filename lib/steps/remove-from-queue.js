const { QUEUE_DELETE_URL } = require('../../config')
const deleteData = require('../delete-data')
const logger = require('../logger')

module.exports = async data => {
  const deleted = []
  logger('info', ['remove-from-queue', 'jobs', data ? data.length : 0])
  async function next () {
    if (QUEUE_DELETE_URL) {
      if (data.length > 0) {
        const job = data.pop()
        const deleteUrl = `${QUEUE_DELETE_URL}/${job._id}`
        try {
          await deleteData(deleteUrl)
          logger('info', ['remove-from-queue', job._id, deleteUrl, 'success'])
          deleted.push(job)
          await next()
        } catch (error) {
          logger('error', ['remove-from-queue', job._id, deleteUrl, error])
          throw error
        }
      } else {
        logger('info', ['remove-from-queue', 'deleted', deleted.length, 'finished'])
        return deleted
      }
    } else {
      logger('info', ['remove-from-queue', 'nothing to delete', 'finished'])
      return data
    }
  }
  const result = await next()
  return result
}
