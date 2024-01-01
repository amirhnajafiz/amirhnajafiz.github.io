+++
date = "2023-10-14"
title = "Cloud Provider"
slug = "Implementing a cloud computing provider system"
categories = [ "cloud computing", "cloud", "virtualization" ]
tags = [ "python", "cloud", "rabbitmq", "qemu" , "cloud-computing", "platform"]
katex = true
headline = "Implementing a cloud computing provider system"
+++

Implementing a bare metal cloud computing provider system with ```python```, ```rabbitmq```, and ```qemu```.
My goal is to create an on-demand computing platform like EC2 (aka Amazon Elastic Compute Cloud).
This provider is capable of:

- Spin up ```VM```s on-demand
- Take down ```VM```s on-demand
- Allow to use or not use a public IP on a ```VM```
- Be scalable in the background, i.e. possibly ```VM```s are on different servers

## Schema

In the following textbox we are displaying our cloud provider schema. As the image states,
first the user sends a request into rabbitMQ cluster to perform an operation. On the other side,
the consumer is bound to listen for user requests. After receiving each request, consumer
checks the input request and calls fallback functions.

```
| make publish | -> | consume by consumer | -> | callback function based on request |
```

## Setup

Create an ```env``` variable for your rabbitMQ address:

```shell
export RABBIT_HOST=localhost
```

Now start the consumer by ```python consumer/main.py```. You can work with
provider as ```CLI``` for sending your requests.

### commands

In the following list you can see ```CLI``` commands:

- ```python provider/main.py start-vm --image [image name]```
- ```python provider/main.py list-vm```
- ```python provider/main.py stop-vm --vm-id [id returned in list-vm]```
