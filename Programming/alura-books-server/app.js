const express = require("express")
const cors = require('cors')
const app = express()
const bookRoute = require('./routes/book')
const favoriteRoute =require('./routes/favorites')
const port = 8000

app.use(express.json())
app.use(cors({origin: '*'}))

app.use('/books', bookRoute)
app.use('/favorites', favoriteRoute)

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
})