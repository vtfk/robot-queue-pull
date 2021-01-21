const saveFile = require('../save-file')
const { logger } = require('@vtfk/logger')
const { JOBS_DIRECTORY_PATH } = require('../../config')

module.exports = async data => {
  logger('info', ['save-to-jobs', 'jobs', data ? data.length : 0])
  if (!data) return data

  const jobs = data.map(async job => {
    try {
      const filePath = `${JOBS_DIRECTORY_PATH}/${job._id}.json`
      await saveFile({ filePath: filePath, data: job })
      return job
    } catch (error) {
      logger('error', ['save-to-jobs', 'job', job._id, error])
      throw error
    }
  })

  const result = await Promise.all(jobs)
  logger('info', ['save-to-jobs', 'saved', result.length, 'finished'])

  return result
}
