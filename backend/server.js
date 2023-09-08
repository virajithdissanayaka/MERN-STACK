require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const workoutRoutes = require('./routes/workouts')
const productRoutes = require('./routes/products')
const employeeRoutes = require('./routes/employees')

//express app
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/products', productRoutes)
app.use('/api/employees', employeeRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
     console.log('connected to db & listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

