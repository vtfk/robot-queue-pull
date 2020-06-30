const { QUEUE_DELETE_URL } = require('../../config')
const deleteData = require('../delete-data')
const logger = require('../logger')

module.exports = async data => {
  logger('info', ['remove-from-queue', 'jobs', data ? data.length : 0])
  if (!data) return data

  const jobs = data.map(async job => {
    try {
      const deleteUrl = `${QUEUE_DELETE_URL}/${job._id}`
      await deleteData(deleteUrl)
      return job
    } catch (error) {
      logger('error', ['remove-from-queue', 'job', job._id, error])
      throw error
    }
  })

  const result = await Promise.all(jobs)
  logger('info', ['remove-from-queue', 'saved', result.length, 'finished'])

  return result
}
