+++
author = "Amirhossein Najafizadeh, Dr.Seyed Ahmad Javadi"
title = "Jump over go channels"
date = "2023-08-21"
description = "Jump over golang channels"
tags = [
    "cloud computing",
    "qjump",
    "golang"
]
+++

Channels are parts of memory that are being used by Goroutines in order to transfer data between themselves. Goroutines are like processes in an operating system. Each channel provides a message queue in which Goroutines send data. Moreover, another Goroutine can listen on a channel in order to receive data from it. The algorithm of these channels is first come first server (aka FCFS). Therefore, we implemented a method in order to jump over low priority tasks in Golang channels queues. In this paper we are going to explain our solution and compare it to old fashion Golang channels to see its benefits.
