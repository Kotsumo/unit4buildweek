require('dotenv').config()

const path = require('path')
const express = require('express')

const server = require('./api/server')

const port = process.env.PORT

server.use(express.static(path.join(__dirname, 'client/dist')))

server.get('*', (req, res) => {
  // if you want to serve a SPA using Express you totally can!
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
})

/* Adding my code */

server.get('/api/potluck', (req, res) => {
  res.send("Let's have a Potluck!");
});

server.post('/api/potluck', (req, res) => {
  res.status(201).json({url: '/api/potluck', operation: 'POST' });
});

server.put('/api/potluck', (req, res) => {
  res.status(200).json({url: '/api/potluck', operation: 'PUT' });
});

server.delete('/api/potluck', (req, res) => {
  res.status(204);
});

server.use(function(req, res) {
  res.status(404).send(`Oh no, you broke it!`);
});

/* End of my code */

server.listen(port, () => {
  console.log('listening on ' + port)
})
