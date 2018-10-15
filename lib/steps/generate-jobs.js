const uuid = require('uuid/v4')
const logger = require('../logger')

module.exports = async data => {
  logger('info', ['generate-jobs', data.length])
  try {
    const jobs = data.map(job => Object.assign({}, { _id: uuid() }, job))
    return jobs
  } catch (error) {
    logger('error', ['generate-jobs', data.length, error])
    throw error
  }
}
