import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  res.status(500).json({ message: `The route ${req.url} is under construction` })
})

router.get('/:id', (req, res) => {
  res.status(500).json({ message: `The route ${req.url} is under construction` })
})

router.put('/:id', (req, res) => {
  res.status(500).json({ message: `The route ${req.url} is under construction` })
})

export default router
