const getNextJobFromQueue = require('./lib/steps/get-next-job-from-queue')
const setupData = require('./lib/steps/setup-data')
const generateJobs = require('./lib/steps/generate-jobs')
const generateYffBekreftelse = require('./lib/steps/generate-yff-bekreftelse')
const saveToJobs = require('./lib/steps/save-to-jobs')
const saveToCopies = require('./lib/steps/save-to-copies')
const { logger } = require('@vtfk/logger')

logger('info', ['index', 'start'])

getNextJobFromQueue()
  .then(generateJobs)
  .then(setupData)
  .then(generateYffBekreftelse)
  .then(saveToJobs)
  .then(saveToCopies)
  .then(async data => {
    await logger('info', ['index', 'jobs', data.length, 'finished'])
    process.exit(0)
  })
  .catch(async error => {
    await logger('error', ['index', 'error', JSON.stringify(error && error.message ? error.message : error)])
    process.exit(1)
  })
