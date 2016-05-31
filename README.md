# Overview

A web based controller for the [CamJam EduKit 3](http://camjam.me/?page_id=1035) in NodeJS. The app uses [onoff](https://github.com/fivdi/onoff) 

![Screenshot](/sample/sample.png)

# Notes

Manually install NodeJS on Jessie since you might face [build issues with onoff](https://github.com/fivdi/onoff/wiki/Node.js-v0.10.29-and-native-addons-on-the-Raspberry-Pi) . 

```
curl https://nodejs.org/dist/latest/node-v6.2.0-linux-armv6l.tar.gz -o node-v6.2.0-linux-armv6l.tar.gz
tar -xvzf node-v6.2.0-linux-armv6l.tar.gz
cd node-v6.2.0-linux-armv6l
sudo ln -s /home/pi/Downloads/node-v6.2.0-linux-armv6l/bin/node /usr/bin/node
sudo ln -s /home/pi/Downloads/node-v6.2.0-linux-armv6l/bin/npm /usr/bin/npm
```


