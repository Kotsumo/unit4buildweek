const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', require('./auth/auth-router'))


/* Adding my code */
// server.get('/', (req, res) => {
//     res.send("Let's have a Potluck!");
//   });
  
//   server.get('/api/potluck', (req, res) => {
//     res.send("Let's have a Potluck!, David");
//   });
  
//   server.post('/api/potluck', (req, res) => {
//     res.status(201).json({url: '/api/potluck', operation: 'POST' });
//   });
  
//   server.put('/api/potluck', (req, res) => {
//     res.status(200).json({url: '/api/potluck', operation: 'PUT' });
//   });
  
//   server.delete('/api/potluck', (req, res) => {
//     res.status(204);
//   });
  
  server.use((err, req, res, next) => {
    res.status(err.status).json({
      message: err.message, 
      stack: err.stack
      });
  });
  
  /* End of my code */

module.exports = server
