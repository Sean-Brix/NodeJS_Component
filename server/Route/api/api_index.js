import express from 'express'

// Router ('/api')
const router = express.Router();


// Profile Picture
import profile_image from './profile_image_rt.js'
router.use('/profile-image', profile_image)


export default router