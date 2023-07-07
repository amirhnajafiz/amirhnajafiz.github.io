# amirhnajafiz.github.io

![](https://img.shields.io/badge/framework-vuejs-lightgreen)
![](https://img.shields.io/badge/version-v0.2.0-blue)

My personal website. Created with ```vue.js```. In order to copy the template
make a clone of ```github.io``` directory. Deployment is by ```github``` static
pages.

## Build

In order to create a release for ```github``` pages run the following script.

```shell
chmod +x build.sh
./build.sh
```

## Docker

```shell
docker build . -f build/Dockerfile -t profile:v0.2.0
docker run -it -d profile:v0.2.0
```
