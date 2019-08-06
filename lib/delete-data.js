const axios = require('axios')
const config = require('../config')
const generateSystemJwt = require('./generate-system-jwt')
const logger = require('./logger')

module.exports = async url => {
  logger('info', ['delete-data', url, 'start'])
  const options = {
    url,
    method: 'delete',
    headers: {
      Authorization: generateSystemJwt()
    }
  }
  if (config.AUTH_USERNAME && config.AUTH_PASSWORD) {
    options.auth = {
      username: config.AUTH_USERNAME,
      password: config.AUTH_PASSWORD
    }
  }
  try {
    const { data } = await axios(options)
    logger('info', ['delete-data', url, 'finished'])
    return data
  } catch (error) {
    logger('error', ['delete-data', url, error])
    throw error
  }
}
