import 'dotenv/config';
import express from 'express'
import UserController from './app/controllers/UserController'

const app = express()

app.get("/", (req, res) => res.send("Olá mundo"))
app.post('/users', UserController.store)

app.use(express.json());

app.listen(process.env.PORT)