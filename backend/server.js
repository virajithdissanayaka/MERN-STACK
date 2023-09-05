require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const productRoutes = require('./routes/products')

//for image uploading
const cors = require('cors')
const multer = require('multer')
const path = require('path')

const ImageModel = require('./models/image')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})
//middleware for image uploading
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

//image uploading part
app.post('/upload',upload.single('file'), (req,res) => {
    ImageModel.create({image: req.file.filename})
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

app.get('/getimage', (req,res) => {
    ImageModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/products', productRoutes)

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

