'use strict'

const saveFile = require('../save-file')
const logger = require('../logger')
const config = require('../../config')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['save-to-copies', data._id])
    const fileName = `${config.COPIES_DIRECTORY_PATH}/${data._id}.json`
    await saveFile({filePath: fileName, data: data})
    logger('info', ['save-to-copies', data._id, fileName, 'success'])
    resolve(data)
  })
}
