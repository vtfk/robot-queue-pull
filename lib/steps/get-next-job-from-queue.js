const { QUEUE_NEXT_URL } = require('../../config')
const logger = require('../logger')
const getData = require('../get-data')

module.exports = async () => {
  logger('info', ['get-next-job-from-queue', 'checking', QUEUE_NEXT_URL])

  try {
    const payload = await getData(QUEUE_NEXT_URL)
    if (payload.length > 0) {
      const data = payload[0]
      logger('info', ['get-next-job-from-queue', 'got job', data._id])
      return data
    } else {
      logger('info', ['get-next-job-from-queue', 'no jobs in queue'])
      process.exit(0)
    }
  } catch (error) {
    throw error
  }
}
