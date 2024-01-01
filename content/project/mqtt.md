+++
date = "2022-12-02"
title = "MQTT Blackbox exporter"
slug = "Connect, Subscribe and Publish over MQTT broker to check its status"
categories = [ "cloud computing", "mqtt", "blackbox" ]
tags = [ "go", "cloud", "rabbitmq", "mqtt" , "cloud-computing", "blackbox"]
katex = true
headline = "Connect, Subscribe and Publish over MQTT broker to check its status"
+++

In each probe it sends a message over MQTT broker and then wait for getting it over subscription.
By measuring this time and also connection, subscription etc. durations you can check your cluster status.
