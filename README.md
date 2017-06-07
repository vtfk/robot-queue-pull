[![Build Status](https://travis-ci.org/telemark/robot-queue-pull.svg?branch=master)](https://travis-ci.org/telemark/robot-queue-pull)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/robot-queue-pull.svg)](https://greenkeeper.io/)

# robot-queue-pull

Pulls job from queue

## Setup

Update docker.env

```bash
JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
JOB_DIRECTORY_PATH=test/directories/jobs
COPIES_DIRECTORY_PATH=test/directories/copies
CALLBACK_URL=https://example.com/api/callback
QUEUE_NEXT_URL=https://example.com/api/queue/next
QUEUE_DELETE_URL=https://example.com/api/queue
PAPERTRAIL_HOSTNAME=robot-queue-pull
PAPERTRAIL_HOST=logs.papertrailapp.com
PAPERTRAIL_PORT=12345
```

## Callback

If you don't need a callback service just remove CALLBACK_URL from config.

## Build

```bash
$ docker build -t robot-queue-pull .
```

## Usage

```
$ docker run --env-file=docker.env --volume=/test/directories/jobs:/src/test/directories/jobs --rm robot-queue-pull
```

This will start a container. Do the job. Stop the container and remove it.

## License

[MIT](LICENSE)

![Robohash image of robot-queue-pull](https://robots.kebabstudios.party/robot-queue-pull.png "Robohash image of robot-queue-pull")