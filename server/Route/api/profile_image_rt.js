import express from 'express'

// Router ('/api/profile-image')
const router = express.Router();

// Profile Picture
router.get('/', (req, res)=>{
    res.status(200).send('Nothing to send (Profile Picture Route)');
    res.end();
})


export default router