import 'colors'

import connectDB from 'auth0-node-clean/db'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

dotenv.config({ path: './src/config/config.env' })

connectDB()

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

if (process.env.NODE_ENV === 'develop') {
  app.use(morgan('dev'))
}

app.get('/', (req, res) => {
  res.send('<h1>Express is working and ready to work !! </h1>')
})

const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})
