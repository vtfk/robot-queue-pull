'use strict'

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  JOBS_DIRECTORY_PATH: process.env.JOBS_DIRECTORY_PATH || 'test/directories/jobs',
  COPIES_DIRECTORY_PATH: process.env.COPIES_DIRECTORY_PATH || 'test/directories/copies',
  CALLBACK_URL: process.env.CALLBACK_URL || 'https://example.com/api/callback',
  QUEUE_NEXT_URL: process.env.QUEUE_NEXT_URL || 'https://example.com/api/queue/next',
  QUEUE_DELETE_URL: process.env.QUEUE_DELETE_URL || 'https://example.com/api/queue',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'robot-queue-pull',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
