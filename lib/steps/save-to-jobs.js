const saveFile = require('../save-file')
const logger = require('../logger')
const { JOBS_DIRECTORY_PATH } = require('../../config')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    let saved = []
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
          return reject(error)
        }
      } else {
        logger('info', ['save-to-jobs', 'saved', saved.length, 'finished'])
        return resolve(saved)
      }
    }
    await next()
  })
}
