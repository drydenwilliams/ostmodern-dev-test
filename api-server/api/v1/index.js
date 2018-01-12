const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

function corsMiddleware(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // Access API from any domain
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization') // Headers to accept
  // Grant pre-flight requests
  if (req.method === 'OPTIONS') {
    // Intercept any request with OPTIONS
    res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE')
    res.status(200).json()
    return;
  }

  next()
}

router.use(corsMiddleware)


const API_URL = 'http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000/api'

router.get('/sets', (req, res) => {
  fetch(`${API_URL}/sets/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(response => res.send(JSON.stringify(response)))
})

router.get('/episodes/:id', (req, res) => {
  const episodeId = req.params.id
  console.log('ID', episodeId)
  fetch(`${API_URL}/episodes/${episodeId}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(response => res.send(JSON.stringify(response)))
})

router.get('/dividers/:id', (req, res) => {
  const episodeId = req.params.id
  console.log('ID', episodeId)
  fetch(`${API_URL}/dividers/${episodeId}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(response => res.send(JSON.stringify(response)))
})

module.exports = router