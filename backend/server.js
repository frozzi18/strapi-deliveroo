#!/usr/bin/env node
'use strict';

/**
 * Use `server.js` to run your application without `$ strapi start`.
 * To start the server, run: `$ npm start`.
 *
 * This is handy in situations where the Strapi CLI is not relevant or useful.
 */

/*
A Content Type, also called a model, is a type of data.
A Strapi API includes, by default, the user Content Type.
Right now, we need restaurants, so our new Content Type 
is going to be, as you already guessed, restaurant 
(Content Types are always singular).


Strapi's mission is to create API (Boot"STRAP" your API)

When you were creating your restaurant Content Type, 
Strapi created, behind the scene, a few set of files 
located in api/restaurant. These files include the logic
to expose a fully customisable CRUD API.

The find route is available at http://localhost:1337/restaurants



Try to visit this URL and will be surprised to be 
blocked by a 403 forbidden error. This is actually
totally normal: Strapi APIs are secured by design

use permissions change to public role

By default, API generated with Strapi are best on REST 
conventions. What if I would tell you that you could 
transform them into GraphQL within 10 seconds?



*/
process.chdir(__dirname);

(() => {
  const strapi = require('strapi');
  strapi.start();
})();
