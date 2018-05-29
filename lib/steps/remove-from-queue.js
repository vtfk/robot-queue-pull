const { QUEUE_DELETE_URL } = require('../../config')
const deleteData = require('../delete-data')
const logger = require('../logger')

module.exports = async data => {
  const deleteUrl = `${QUEUE_DELETE_URL}/${data._id}`
  logger('info', ['remove-from-queue', data._id, deleteUrl])
  try {
    const result = await deleteData(deleteUrl)
    logger('info', ['remove-from-queue', result._id, deleteUrl, 'success'])
    return data
  } catch (error) {
    logger('error', ['remove-from-queue', data._id, deleteUrl, error])
    throw error
  }
}
