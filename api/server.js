const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

/* Adding my code */
server.get('/', (req, res) => {
    res.send("Let's have a Potluck!");
  });
  
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

module.exports = server
