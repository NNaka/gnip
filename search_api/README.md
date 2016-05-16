# Node.js Search API Integration

The purpose of this repository is to create a light-weight server-side
application to show the efficacy of social media data driving business needs.

The two directories represent
[`GET`](https://github.com/NNaka/gnip/tree/master/search_api/GetRequest) and
[`POST`](https://github.com/NNaka/gnip/tree/master/search_api/PostRequest)
request-accepting Node.js servers.  The `server.js` is where the server is
defined.

## Node.js

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on
Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku
Toolbelt](https://toolbelt.heroku.com/) installed.  Also, before running the
```heroku local``` command, make sure to change the `url`, `UN`, and `PWD`
fields in `server.js`.

For server handling GET request:
```sh $ git clone git@github.com:NNaka/gnip.git # or clone
your own fork $ cd gnip/search_api/GetRequest $ npm install $ heroku local```

For server handling POST request:
```sh $ git clone git@github.com:NNaka/gnip.git # or clone
your own fork $ cd gnip/search_api/PostRequest $ npm install $ heroku local```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

``` $ heroku create $ git push heroku master $ heroku open ``` or

[![Deploy to
Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center
articles:

- [Getting Started with Node.js on
  Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js
  Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js
  Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with
  Node.js](https://devcenter.heroku.com/articles/node-websockets)

## Gnip

[Gnip](https://www.gnip.com/about/) is Twitter’s enterprise API platform that
enables businesses to unleash the power of social data.

### Primary features / Use-case

- Access to over 100 realtime social media streams from dozens of sources
- Enrichments such as Klout scores, URL unwinding and language detection
- The ability to input rules through the UI or via the rules API
- A stream of raw social data, just waiting for you to turn it into something
  amazing
