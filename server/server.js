import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import path from 'path'
import { fileURLToPath } from 'url'
import app from './app.js'
import http from 'http'

// Configuration
dotenv.config();
colors.enable();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

// Server
const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log("\n\nLINK: ".cyan + ("http://localhost:"+PORT+"/api").yellow.italic.underline + "\n\n");
})

// DATABASE
mongoose.connect(URI);

export default server