import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'

import groups from './routes/groups.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/groups', groups)


const port = +(process.env.PORT || 3000)
app.listen(port, () => {
    console.log("Server is running")    
})