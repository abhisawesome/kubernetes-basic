const express = require('express');

const app = express()

app.get('/', (req, res) => {
    return res.status(200).send("Hello World From Express !!")
})


app.listen(process.env.PORT || 3000, () => {
    console.log('app started !! on port:', process.env.PORT || 3000)
})