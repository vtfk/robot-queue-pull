const { QUEUE_DELETE_URL } = require('../../config')
const deleteData = require('../delete-data')
const logger = require('../logger')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    if (QUEUE_DELETE_URL) {
      let deleted = []
      logger('info', ['save-to-jobs', 'jobs', data.length])
      const next = async () => {
        if (data.length > 0) {
          const job = data.jobs.pop()
          const deleteUrl = `${QUEUE_DELETE_URL}/${job._id}`
          try {
            const result = await deleteData(deleteUrl)
            logger('info', ['remove-from-queue', result._id, deleteUrl, 'success'])
            deleted.push(job)
            await next()
          } catch (error) {
            logger('error', ['remove-from-queue', job._id, deleteUrl, error])
            return reject(error)
          }
        } else {
          logger('info', ['remove-from-queue', 'deleted', deleted.length, 'finished'])
          return resolve(data)
        }
      }
      await next()
    } else {
      logger('info', ['remove-from-queue', 'nothing to delete', 'finished'])
    }
  })
}
