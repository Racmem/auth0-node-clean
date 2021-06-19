import 'colors'

import { errorMessage } from 'auth0-node-clean/auth0'
import connectDB from 'auth0-node-clean/db'
import routes from 'auth0-node-clean/routes/routes'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

// Load env vars
dotenv.config({ path: './src/config/config.env' })

// DB connection
connectDB()

const app = express()

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Cors
app.use(cors())

// Dev logging middleware
if (process.env.NODE_ENV === 'develop') {
  app.use(morgan('dev'))
}

// Auth0 log if not exist data for config
if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  console.error('Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file'.red.bold)
}

// Message from "roots"
app.get('/', (req, res) => {
  res.send('<h1>Express is working and ready to work!</h1>')
})

// Router
app.use(routes)

// Middleware to response error message 401
app.use(errorMessage)

const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold,
  )
})
