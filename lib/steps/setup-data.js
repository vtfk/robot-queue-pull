'use strict'

const config = require('../../config')
const logger = require('../logger')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['setup-data', data._id, 'start'])
    data.callbackUrl = config.CALLBACK_URL
    logger('info', ['setup-data', data._id, 'finished'])

    resolve(data)
  })
}
