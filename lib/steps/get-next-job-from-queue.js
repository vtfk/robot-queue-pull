const { QUEUE_NEXT_URL } = require('../../config')
const logger = require('../logger')
const getData = require('../get-data')

module.exports = async () => {
  logger('info', ['get-next-job-from-queue', 'checking', QUEUE_NEXT_URL])
  try {
    const data = await getData(QUEUE_NEXT_URL)
    if (data.length > 0) {
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
