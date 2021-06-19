import { checkJwt, checkScopes } from 'auth0-node-clean/auth0'
import authRoutes from 'auth0-node-clean/routes/auth/authRoutes'
import userRoutes from 'auth0-node-clean/routes/user/userRoutes'
import express from 'express'

const router = express.Router()

router.use('/api/v1/auth', authRoutes)
router.use('/api/v1/user', checkJwt, checkScopes, userRoutes)

export default router
