
Create a docker network for node to talk to mongo

```bash
$ docker create network mongo-net
```

Run an insecure mondodb instance that will dissappear on a kill
```bash
$ docker run --rm -d --name mongo-serv --network mongo-net mongo
```

Run the node development container
```
$ docker run --rm -ti -v $PWD:/app -w /app --network mongo-net -p 3000:3000 node:slim /bin/bash
root@xxxxxxx:/app# npm run dev
```




