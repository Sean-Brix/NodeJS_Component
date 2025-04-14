import express from 'express'

// Router ('/')
const router = express.Router();

// API
import api from './api/api_index.js'
router.use('/api', api)

// Authentication
import auth from './authentication/auth_index.js'
router.use('/auth', auth)

export default router