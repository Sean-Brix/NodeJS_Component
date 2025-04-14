import express, { urlencoded } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import MongoStore from 'connect-mongo'


// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()
const URI = process.env.MONGO_URI;

// Request Handler
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: true}))
app.use(cookieParser());

app.use(session({
  secret: "random secret text",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  store: MongoStore.create({
    mongoUrl: URI,
    ttl: 24 * 60 * 60
  })
}));


// Router
import router from './Route/index_rt.js'
app.use('/', router)

// Invalid Route Fallback
app.use((req, res) => {
  res.status(404).send("404 Resource not found - Invalid input route");
});


export default app