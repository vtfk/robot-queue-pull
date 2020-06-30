const saveFile = require('../save-file')
const logger = require('../logger')
const { COPIES_DIRECTORY_PATH } = require('../../config')

module.exports = async data => {
  const saved = []
  logger('info', ['save-to-copies', 'jobs', data ? data.length : 0])
  async function next () {
    if (data && data.length > 0) {
      const job = data.pop()
      const filePath = `${COPIES_DIRECTORY_PATH}/${job._id}.json`
      try {
        await saveFile({ filePath: filePath, data: job })
        saved.push(job)
        await next()
      } catch (error) {
        logger('error', ['save-to-copies', 'job', job._id, error])
        throw error
      }
    } else {
      logger('info', ['save-to-copies', 'saved', saved.length, 'finished'])
      return saved
    }
  }
  const result = await next()
  return result
}
