const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.send('Login will be here')
})

module.exports = router