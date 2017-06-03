'use strict'

const saveFile = require('../save-file')
const logger = require('../logger')
const config = require('../../config')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['save-to-jobs', data._id])
    const fileName = `${config.JOBS_DIRECTORY_PATH}/${data._id}.json`
    try {
      await saveFile({filePath: fileName, data: data})
      logger('info', ['save-to-jobs', data._id, fileName, 'success'])
      resolve(data)
    } catch (error) {
      logger('error', ['save-to-jobs', data._id, fileName, error])
      reject(error)
    }
  })
}
