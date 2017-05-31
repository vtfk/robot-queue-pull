'use strict'

const getNextJobFromQueue = require('./lib/steps/get-next-job-from-queue')
const saveToJobs = require('./lib/steps/save-to-jobs')
const saveToCopies = require('./lib/steps/save-to-copies')
const removeFromQueue = require('./lib/steps/remove-from-queue')
const logger = require('./lib/logger')

logger('info', ['index', 'start'])

getNextJobFromQueue()
  .then(saveToJobs)
  .then(saveToCopies)
  .then(removeFromQueue)
  .then((data) => {
    logger('info', ['index', data._id, 'finished'])
    process.exit(0)
  })
  .catch((error) => {
    logger('error', ['index', 'error', JSON.stringify(error)])
    process.exit(1)
  })
