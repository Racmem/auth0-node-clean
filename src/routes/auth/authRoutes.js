import express from 'express'

const router = express.Router()

router.post('/login', (req, res) => {
  res.status(500).json({ message: `The route ${req.url} is under construction` })
})

router.post('/signup', (req, res) => {
  res.status(500).json({ message: `The route ${req.url} is under construction` })
})

export default router
