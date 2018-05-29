const axios = require('axios')
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
  const { data } = await axios(options)
  logger('info', ['delete-data', url, 'finished'])
  return data
}
