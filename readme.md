# Description

This is a sample integration project between Contentful CMS, **spike** static website build tool and **spike-contentful** plugin.

The project runs a simple biuld that resolves Contenful publsihed entires and builds speicified websites

It works great 💯

## Setup

- make sure [node.js](http://nodejs.org) is at version >= `6`
- `npm i spike -g`
- `npm install`

## Building 

### Few examples building microsites

#### Auburn University in US English

-  `build.sh en-US Auburn`

#### Adelphi University in Simplified Chinese

-  `build.sh zh-CN Adelphi`

#### Florida International with embedded video assets

-  `build.sh en-US FIU`



The output and generated website will be plased into `public/index.html` 
