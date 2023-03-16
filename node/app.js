const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body)
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Webhook receiver app listening at http://localhost:${port}`)
})