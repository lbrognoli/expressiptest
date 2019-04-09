const express = require('express')
const requestIp = require('request-ip')

const app = express()
app.use(requestIp.mw())

app.get("/ip", (req, res) => {
    const ip = req.clientIp
    res.send(ip)
})

app.listen(process.env.PORT || 3000, () => {
    console.log('server up')
})