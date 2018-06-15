const { QUEUE_DELETE_URL } = require('../../config')
const deleteData = require('../delete-data')
const logger = require('../logger')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    let deleted = []
    logger('info', ['remove-from-queue', 'jobs', data.length])
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
            return reject(error)
          }
        } else {
          logger('info', ['remove-from-queue', 'deleted', deleted.length, 'finished'])
          return resolve(deleted)
        }
      } else {
        logger('info', ['remove-from-queue', 'nothing to delete', 'finished'])
        return resolve(data)
      }
    }
    await next()
  })
}
