+++
date = "2023-10-24"
title = "Sanjab"
slug = "Service for backing up your K8S objects into Ceph cluster"
categories = [ "k8s", "ceph", "operator" ]
tags = [ "go", "k8s", "ceph", "worker" ]
katex = true
headline = "Service for backing up your K8S objects into Ceph cluster"
+++

Sanjab (aka squirrel is english) is a service for backing up your k8s objects into Ceph cluster. Whenever a new request is
sent to api-server, sanjab gets the kubernetes object of that request and stores it Ceph cluster.

Sanjab is built with kubernetes operator pattern. It watches over the following resources on cluster, and stores the object
as a yaml file on Ceph cluster.

- Pods
- Deployments
- Services
- Cronjobs
- Configmaps
- Secrets
- ServiceAccounts
- StatefulSets
- HPAs
- Ingress
- PVCs

## configs

For Sanjab server configs, you need to create a ```config.yml``` file. This file's structure
is like this:

```yaml
timeout: 60 # in seconds
port: 80 # service http port
namespace: "default" # kubernetes namespace
ceph_disable: false # enabling ceph upload
ceph:
  host: "http://127.0.0.1:6800"
  access: "access-token"
  secret: "secret-token"
  bucket: "bucket-name"
```

You can list your desire resources in the ```config.yml``` file. Sanjab creates a worker process for each
resource to manage them concurrently. For example, if we want to back up only pods and deployments, we need
to set our resources like this:

```yaml
resources:
  - pods
  - deployments
```

## deployment

To deploy Sanjab on a kubernetes cluster, review deployment manifests. You need to deploy
all of those files, especially ```rbac``` and ```service account```. Sanjab needs access
to all api groups in order to get, list, and watch those resources.

### :peanuts: docker image

````shell
docker pull amirhossein21/sanjab:latest
````

## monitoring

If you want to check Sanjab health and workers status, make the following http
requests.

````shell
curl -i -X GET localhost/metrics # metrics export
curl -i -X GET localhost/workers # workers status
curl -i -X GET localhost/health  # service health
````
