/*

You will notice that if you navigate to the restaurant 
route and hit refresh, you will get a 404 page. This is 
because when you click the Link component the client is 
handling the routing, but on refresh the route is not
 found by the server.

 Express.js solve this (refresh problems)

 Package json before:
// "scripts": {
//   "dev": "next",
//   "build": "next build",
//   "start": "next start"
// }

*/



/* server.js */

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
	.then(() => {
		const server = express()

		// What is it for?

		server.get('/restaurants/:id', (req, res) => {
			const actualPage = '/restaurants'
			const queryParams = { id: req.params.id }
			console.dir("req.params.id = " + JSON.stringify(req.params.id))
			app.render(req, res, actualPage, queryParams)
		})

		server.get('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(3000, (err) => {
			if (err) throw err
			console.log('> Ready on http://localhost:3000')
		})
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	})