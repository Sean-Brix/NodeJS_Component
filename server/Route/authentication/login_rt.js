import express from 'express'

// Router ('/auth/login')
const router = express.Router();

// Login
router.get('/', (req, res)=>{
    res.status(200).send('Nothing to send');
    res.end();
})


export default router