
# Node Mongo Express

[![Build Status](https://travis-ci.org/leopoldodonnell/node-mongo-express.svg?branch=master)](https://travis-ci.org/leopoldodonnell/node-mongo-express)

[![Known Vulnerabilities](https://snyk.io/test/github/leopoldodonnell/node-mongo-express/badge.svg)](https://snyk.io/test/github/leopoldodonnell/node-mongo-express)

This project is a simplistic start for working with Node, Mongo and Express with CI using TravisCI and dependency Security with Snyk.

TODO: Add more discussion

## <a id="getting-started"></a>TL;DR

1. clone this repo
1. `cd node-mongo-express`
1. Install all the node modules: `npm install`
1. Start up an instance of mongodb. The easiest way (if you have docker installed) is to use docker `docker run --rm -d --name mongo-serv mongo` this will startup mondb on its default port`27017`
1. Create the database for the app: `npm run makedb`
1. Run the server: `npm run dev`

## On-going development with Docker

TODO: Add more discussion

If you haven't installed `Node` on your development machine, you can still develop using `Docker`. In this example
you'll create a network for your containers to connect to, then run `Mongo` using a docker daemon and an interactive
`node` shell container on your current directory to do your development.


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
```

4. Follow the steps above at [TL;DR](#getting-started) (replacing the mongodb startup with the one described in this section)

## TravisCI integratin

TODO: Add more discussion

Update the github account and repository to display your TravisCI badge:

```markdown
[![Build Status](https://travis-ci.org/{your-github-account}/{your-project-name}.svg?branch=master)](https://travis-ci.org/{your-github-account}/{your-project-name})
```

## Snyk Integration

TODO: Add more discussion

Update the github account and repository to display your Snyk badge:

```markdown
[![Known Vulnerabilities](https://snyk.io/test/github/{your-github-account}/{your-project-name}.svg)](https://snyk.io/test/github/{your-github-account}/{your-project-name})
```
