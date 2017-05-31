'use strict'

const config = require('../../config')
const deleteData = require('../delete-data')
const logger = require('../logger')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    const deleteUrl = `${config.QUEUE_DELETE_URL}/${data._id}`
    logger('info', ['remove-from-queue', data._id, deleteUrl])
    const result = await deleteData(deleteUrl)
    logger('info', ['remove-from-queue', result._id, deleteUrl, 'success'])
    resolve(data)
  })
}
