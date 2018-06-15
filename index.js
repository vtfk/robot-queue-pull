const getNextJobFromQueue = require('./lib/steps/get-next-job-from-queue')
const setupData = require('./lib/steps/setup-data')
const generateJobs = require('./lib/steps/generate-jobs')
const saveToJobs = require('./lib/steps/save-to-jobs')
const saveToCopies = require('./lib/steps/save-to-copies')
const removeFromQueue = require('./lib/steps/remove-from-queue')
const logger = require('./lib/logger')

logger('info', ['index', 'start'])

getNextJobFromQueue()
  .then(generateJobs)
  .then(setupData)
  .then(saveToJobs)
  .then(saveToCopies)
  .then(removeFromQueue)
  .then(data => {
    logger('info', ['index', data._id, 'finished'])
    process.exit(0)
  })
  .catch(error => {
    logger('error', ['index', 'error', JSON.stringify(error && error.message ? error.message : error)])
    process.exit(1)
  })
