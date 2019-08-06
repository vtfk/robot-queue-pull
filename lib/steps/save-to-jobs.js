const saveFile = require('../save-file')
const logger = require('../logger')
const { JOBS_DIRECTORY_PATH } = require('../../config')

module.exports = async data => {
  const saved = []
  logger('info', ['save-to-jobs', 'jobs', data.length])
  async function next () {
    if (data.length > 0) {
      const job = data.pop()
      const filePath = `${JOBS_DIRECTORY_PATH}/${job._id}.json`
      try {
        await saveFile({ filePath: filePath, data: job })
        saved.push(job)
        await next()
      } catch (error) {
        logger('error', ['save-to-jobs', 'job', job._id, error])
        throw error
      }
    } else {
      logger('info', ['save-to-jobs', 'saved', saved.length, 'finished'])
      return saved
    }
  }
  const result = await next()
  return result
}
