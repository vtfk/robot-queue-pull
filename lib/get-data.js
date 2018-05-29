const axios = require('axios')
const generateSystemJwt = require('./generate-system-jwt')
const logger = require('./logger')

module.exports = async url => {
  logger('info', ['get-data', url, 'start'])
  const options = {
    url,
    headers: {
      Authorization: generateSystemJwt()
    }
  }
  try {
    const { data } = await axios(options)
    console.log(data)
    logger('info', ['get-data', url, 'finished'])
    return data
  } catch (error) {
    throw error
  }
}
