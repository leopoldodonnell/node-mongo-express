
# Node Mongo Express

[![Build Status](https://travis-ci.org/leopoldodonnell/node-mongo-express.svg?branch=master)](https://travis-ci.org/leopoldodonnell/node-mongo-express)

[![Known Vulnerabilities](https://snyk.io/test/github/{username}/{repo}/badge.svg)](https://snyk.io/test/github/{username}/{repo})

This project is a simplistic started for working with Node, Mongo and Express with CI using TravisCI and dependency Security with Snyk.

TODO: Add more discussion

## On-going development with Docker

TODO: Add more discussion

If you haven't installed `Node` on your development machine, you can still develop using `Docker`. In this example
you'll create a network for your containers to connect no, then run `Mongo` using a docker daemon and an interactive
`Node` shell container on your current directory to do your development.


1. Create a docker network for node to talk to mongo

```bash
$ docker create network mongo-net
```

2. Run an insecure mondodb instance that will dissappear on a kill
```bash
$ docker run --rm -d --name mongo-serv --network mongo-net mongo
```

3. Run the node development container
```
$ docker run --rm -ti -v $PWD:/app -w /app --network mongo-net -p 3000:3000 node:slim /bin/bash
root@xxxxxxx:/app# npm run dev
```

## TravisCI integratin

TODO: Add more discussion
