const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json('App will be here')
})

module.exports = router