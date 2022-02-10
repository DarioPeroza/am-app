const express = require('express')
const router = express.Router()
const User = require('../models/users')

router.get('/login', async (req, res) => {
    res.json('Login will be here')
})

module.exports = router