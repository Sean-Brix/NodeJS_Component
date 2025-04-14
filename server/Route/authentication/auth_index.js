import express from 'express'

// Router ('/auth')
const router = express.Router();

// Login
import login from './login_rt.js'
router.use('/login', login)



export default router