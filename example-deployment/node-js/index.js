const express = require('express');

const app = express()

app.get('/', (req, res) => {
    return res.status(200).send("Hello World From Express !!")
})

app.get('/get', (req, res) => {
    const { throwError } = req.query;
    if (throwError) {
        return res.status(500).send("Error !!")
    }
    return res.status(200).send({ ...req.query })
})

app.post('/post', (req, res) => {
    const { throwError } = req.query;
    if (throwError) {
        return res.status(500).send("Error !!")
    }
    return res.status(200).send({ ...req.body })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('app started !! on port:', process.env.PORT || 3000)
})