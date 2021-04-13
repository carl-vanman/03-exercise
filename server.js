const express = require('express')
const app = express()
const guestbook = require('./routes/guestbook.js')

const PORT = 1337

app.use('/guestbook', guestbook)

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
})