const { QUEUE_URL } = require('../../config')
const { logger } = require('@vtfk/logger')
const getData = require('../get-data')

module.exports = async () => {
  logger('info', ['get-next-job-from-queue', 'checking', QUEUE_URL])

  try {
    const { data } = await getData(QUEUE_URL)
    if (data && data.length > 0) {
      logger('info', ['get-next-job-from-queue', 'got jobs', data.length])
      return data
    } else {
      logger('info', ['get-next-job-from-queue', 'no jobs in queue'])
      process.exit(0)
    }
  } catch (error) {
    logger('error', ['get-next-job-from-queue', error])
    throw error
  }
}
