+++
date = "2022-12-12"
title = "Nginx Operator"
slug = "Kubernetes operator for Nginx deployments"
categories = [ "nginx", "kubernetes" ]
tags = [ "shell", "nginx", "k8s", "cloud" , "operator"]
katex = true
headline = "Kubernetes operator for Nginx deployments"
+++

Nginx operator for Kubernetes. This operator watches the changes of ```ConfigMaps``` and
rollouts a new deployment whenever you release a new ```ConfigMap``` for you ```nginx``` application.

## Start

In your cluster run the script:

```shell
chmod +x ./operator.sh && ./operator.sh
```

### Sample

A sample of ```nginx``` configmap:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: sample
  app: nginx
data:
  index.html: "<h1>Hello World!</h1>"
```

### Test

Now if you apply this ```ConfigMap```, operator will automatically releases a new deployment:

```shell
kubectl apply -f nginx.yml
```
