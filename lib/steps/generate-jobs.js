const { v4: uuid } = require('uuid')
const { logger } = require('@vtfk/logger')

module.exports = async data => {
  logger('info', ['generate-jobs', data ? data.length : 0])

  try {
    const jobs = data.map(job => Object.assign({}, { _id: uuid() }, job))
    return jobs
  } catch (error) {
    logger('error', ['generate-jobs', data.length, error])
    throw error
  }
}
