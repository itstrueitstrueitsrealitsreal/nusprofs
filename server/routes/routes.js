const express = require('express')
const router = express.Router()

// Create
router.post('/post', (req, res) =>{
    res.send("Post API")
})

// Read
router.get('/get', (req, res) => {
    res.send("Get API")
})


module.exports = router