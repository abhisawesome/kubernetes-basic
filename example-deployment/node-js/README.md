# Deploy a simple node.js app using KUBERNETES

## Docker


Docker image: [abhijithababhijith/getting-started-expressjs](https://hub.docker.com/r/abhijithababhijith/getting-started-expressjs)

### Run docker on local

```
docker build -t express-getting-started:latest .
docker run -p 3000:3000 -e PORT=3000  express-getting-started:latest
```


## Deploy using Kubernetes

```
kubectl create -f deploy.yml
```
