'use strict'

module.exports = {
  JWT_KEY: process.env.JWT_KEY || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  JOBS_DIRECTORY_PATH: process.env.JOBS_DIRECTORY_PATH || 'test/data/jobs',
  COPIES_DIRECTORY_PATH: process.env.COPIES_DIRECTORY_PATH || 'test/data/copies',
  CALLBACK_URL: process.env.CALLBACK_URL || 'https://example.com/api/callback',
  QUEUE_NEXT_URL: process.env.QUEUE_NEXT_URL || 'https://example.com/api/queue/next',
  QUEUE_DELETE_URL: process.env.QUEUE_DELETE_URL || 'https://example.com/api/queue'
}
