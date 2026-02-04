import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
const app = express()
const port = 4000


import cors from 'cors'

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))

const __filename = fileURLToPath(
    import.meta.url)
const __dirname = path.dirname(__filename)

app.get("/", (req, res) => {
    res.send("Server is Running");
})

app.get("/GetCollectionCategories", (req, res) => {
    res.sendFile(path.join(__dirname, '../media/data/CollectionCategories.json'))
})

app.listen(port, () => {
    console.log(`app is running on http://localhost:${port}`)
})