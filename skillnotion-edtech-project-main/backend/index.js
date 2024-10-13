const express = require("express")
const FRONTEND_URL = process.env.FRONTEND_URL

const dbconnection = require("./config/database")
const cloudinaryConnect = require("./config/cloudinary")

const courseRoutes = require('./routes/course')
const paymentRoutes = require('./routes/payment')
const profileRoutes = require('./routes/profile')
const userRoutes = require('./routes/user')
const contactRoutes = require('./routes/contact')

const cookieParser = require("cookie-parser")
const cors = require("cors")
const fileUpload = require("express-fileupload")
require('dotenv').config();


const PORT = process.env.PORT || 4001

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
// var allowCrossDomain = function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }
// app.configure(function() {
//     app.use(allowCrossDomain);
// });    
app.use(cors());

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
)
// cloudinary connect
cloudinaryConnect()

// routes
app.use("/api/v1/auth", userRoutes)
app.use("/api/v1/profile", profileRoutes)
app.use("/api/v1/course", courseRoutes)
app.use("/api/v1/reach", contactRoutes)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the API"
    })
});
app.listen(PORT, () => {
    console.log(`server started on port no. ${PORT}`);
})

dbconnection()