const express = require('express')
const app = express()
const PORT = 3030
app.get('/', async (req, res) => {
    res.send("Hello world")
})
app.listen(PORT, () => {
    console.log("server started @ PORT: " + PORT)
})
