const saveFile = require('../save-file')
const logger = require('../logger')
const { COPIES_DIRECTORY_PATH } = require('../../config')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    let saved = []
    logger('info', ['save-to-copies', 'jobs', data.length])
    async function next () {
      if (data.length > 0) {
        const job = data.jobs.pop()
        const filePath = `${COPIES_DIRECTORY_PATH}/${job._id}.json`
        try {
          await saveFile({filePath: filePath, data: job})
          saved.push(job)
          await next()
        } catch (error) {
          return reject(error)
        }
      } else {
        logger('info', ['save-to-copies', 'saved', saved.length, 'finished'])
        return resolve(data)
      }
    }
    await next()
  })
}
