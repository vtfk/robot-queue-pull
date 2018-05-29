const { CALLBACK_URL } = require('../../config')
const logger = require('../logger')

module.exports = data => {
  logger('info', ['setup-data', data._id, 'start'])
  if (CALLBACK_URL) {
    data.callbackUrl = CALLBACK_URL
  }
  logger('info', ['setup-data', data._id, 'finished'])
  return data
}
