'use strict'

const config = require('../../config')
const logger = require('../logger')
const getData = require('../get-data')

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    const nextUrl = config.QUEUE_NEXT_URL
    logger('info', ['get-next-job-from-queue', 'checking', nextUrl])
    const payload = await getData(nextUrl)

    if (payload.length > 0) {
      const data = payload[0]
      logger('info', ['get-next-job-from-queue', 'got job', data._id])
      resolve(data)
    } else {
      logger('info', ['get-next-job-from-queue', 'no jobs in queue'])
      process.exit(0)
    }
  })
}
