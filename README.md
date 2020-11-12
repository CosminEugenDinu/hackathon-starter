# Node.js Complete Authentication App

### *Features*
- Google reCaptcha v2 on signup, login, contact
- Signup with activation code sent via email

### *Demo*

### *Prerequisites*
- Gnu/Linux
- [MongoDb](https://www.mongodb.com/), [NodeJS](https://nodejs.org/en/download/package-manager/), [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### *Install*
```bash
git clone https://github.com/CosminEugenDinu/nodejs-authentication-app.git
cd nodejs-authentication-app

# install dependencies
npm install
```
If you encountered an error like: *Node Sass does not yet support your current environment: Linux 64-bit with Unsupported runtime (88)*, run:
```bash
npm rebuild node-sass
# and be patience ... it might last few minutes
```
```bash
# edit .env to match your settings
cp .env.example .env

# start mongodb server service like:
sudo service mongodb start

npm app.js
# or
npm run dev
```

### *Technologies*

| NAME	       | DESCRIPTION |
|--------------|-------------|
| MongoDB	     | NoSQL database |
| Express	     | Nodejs web server framework |

### References

---------------------
## Hackathon-Starter

App built using hackathon-starter boilderplate: https://github.com/sahat/hackathon-starter


[![Dependency Status](https://david-dm.org/sahat/hackathon-starter/status.svg?style=flat)](https://david-dm.org/sahat/hackathon-starter) [![Build Status](https://travis-ci.org/sahat/hackathon-starter.svg?branch=master)](https://travis-ci.org/sahat/hackathon-starter) [![Join the chat at https://gitter.im/sahat/hackathon-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sahat/hackathon-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Thinkful Pair on Node](https://tf-assets-staging.s3.amazonaws.com/badges/thinkful_repo_badge.svg)](http://start.thinkful.com/node/)


License
-------
This software is distributed under The MIT License (MIT).
Copyright (c) 2014-2016 Sahat Yalkabov.
Copy of LICENSE is included in this repository.
