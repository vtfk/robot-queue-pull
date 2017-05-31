'use strict'

const axios = require('axios')
const generateSystemJwt = require('../generate-system-jwt')
const logger = require('../logger')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['post-status', data._id, 'start'])
    axios.defaults.headers.common['Authorization'] = generateSystemJwt()

    logger('info', ['post-status', data._id, 'url', data.url])

    const result = await axios.post(data.url, data.payload)

    logger('info', ['post-status', data._id, 'finished'])

    resolve(result.data)
  })
}
