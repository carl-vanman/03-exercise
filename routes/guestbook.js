const express = require('express')
const router = express.Router()

let visitorCount = 0;

router.get('/', (req, res) => {
	visitorCount++
	res.send(`Du är besökare nummer ${visitorCount}`)
});

module.exports = router