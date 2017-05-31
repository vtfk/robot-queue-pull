'use strict'

const axios = require('axios')
const generateSystemJwt = require('../generate-system-jwt')
const logger = require('../logger')

module.exports = url => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['delete-data', url, 'start'])
    axios.defaults.headers.common['Authorization'] = generateSystemJwt()

    const result = await axios.delete(url)

    logger('info', ['delete-data', url, 'finished'])

    resolve(result.data)
  })
}
