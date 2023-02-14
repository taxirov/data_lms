import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'

import groups from './routes/groups.routes'
import teachers from './routes/teachers.routes'
import students from './routes/students.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/groups', groups)
app.use('/teachers', teachers)
app.use('/students', students)


const port = +(process.env.PORT || 3000)
app.listen(port, () => {
    console.log("Server is running")    
})