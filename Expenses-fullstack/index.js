require('dotenv').config()
const express = require('express')
const cors = require('cors')
const configDB = require('../Expenses-fullstack/config/database')
const router = require('../Expenses-fullstack/config/routes')
const app = express()
const PORT = 3088
// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public")
//     },
//     filename: function (req, file, cb) {
//         const parts = file.mimetype.split("/");
//         cb(null, `${file.fieldname}-${Date.now()}.${parts[1]}`)
//     }
// })

// const upload = multer({storage});

// app.post("/save-image", upload.single("image"), (req, res) => {
//     res.sendFile(`${__dirname}/public/${req.file.filename}`)
// })

// app.use(express.static("public"))

configDB()
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))
// app.use(router)
app.use('/', router)

app.listen(PORT, () => {
     console.log('listening to the server' , PORT)
})