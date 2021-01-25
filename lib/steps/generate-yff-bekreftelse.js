const { logger } = require('@vtfk/logger')

module.exports = async data => {
  logger('info', ['generate-yff-bekreftelse', data.length, 'start'])

  data.forEach(job => {
    if (job.variant === 'bekreftelse') {
      logger('info', ['generate-yff-bekreftelse', 'bedrift found', job._id])
      const newJob = { ...job }
      newJob._id = `${newJob._id}_bekreftelse`
      newJob.variant = 'bekreftelse-bedrift'
      logger('info', ['generate-yff-bekreftelse', 'bekreftelse added', newJob._id])
      data.push(newJob)
    }
  })
  logger('info', ['generate-yff-bekreftelse', data.length, 'finished'])
  return data
}
