if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  JOBS_DIRECTORY_PATH: process.env.JOBS_DIRECTORY_PATH || 'test/directories/jobs',
  COPIES_DIRECTORY_PATH: process.env.COPIES_DIRECTORY_PATH || 'test/directories/copies',
  CALLBACK_URL: process.env.CALLBACK_URL || false,
  AUTH_USERNAME: process.env.AUTH_USERNAME || false,
  AUTH_PASSWORD: process.env.AUTH_PASSWORD || false,
  QUEUE_NEXT_URL: process.env.QUEUE_NEXT_URL || 'https://example.com/api/queue/next',
  QUEUE_DELETE_URL: process.env.QUEUE_DELETE_URL || false,
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'robot-queue-pull',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
