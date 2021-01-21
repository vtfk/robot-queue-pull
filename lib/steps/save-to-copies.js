const saveFile = require('../save-file')
const { logger } = require('@vtfk/logger')
const { COPIES_DIRECTORY_PATH } = require('../../config')

module.exports = async data => {
  logger('info', ['save-to-copies', 'jobs', data ? data.length : 0])
  if (!data) return data

  const jobs = data.map(async job => {
    try {
      const filePath = `${COPIES_DIRECTORY_PATH}/${job._id}.json`
      await saveFile({ filePath: filePath, data: job })
      return job
    } catch (error) {
      logger('error', ['save-to-copies', 'job', job._id, error])
      throw error
    }
  })

  const result = await Promise.all(jobs)
  logger('info', ['save-to-copies', 'saved', result.length, 'finished'])

  return result
}
