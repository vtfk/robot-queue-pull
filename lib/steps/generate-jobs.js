const uuid = require('uuid/v4')
const logger = require('../logger')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['generate-jobs', data.length])
    try {
      const jobs = data.map(job => Object.assign({}, {_id: uuid()}, job))
      return resolve(jobs)
    } catch (error) {
      logger('error', ['generate-jobs', data.length, error])
      return reject(error)
    }
  })
}
