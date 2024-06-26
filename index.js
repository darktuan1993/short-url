const express = require('express');
const path = require('path')
const port = 3000;
// const mongoURI = 'mongodb+srv://dangtuan:0934010704@url-short.nd90j5s.mongodb.net/?retryWrites=true&w=majority'
const app = express()
const mongoose = require('mongoose')
const { rootRouter } = require("./routes/routers");

app.use(express.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.json())



// KẾT NỐI DATABASE MONGO
const dbName = 'production-short-url';
const username = 'darktuan';
const password = 'dangtuan12';
const ip = '10.0.0.223';
const portMongo = '32680';
const connectionString = `mongodb://${username}:${password}@${ip}:${portMongo}/${dbName}`;


// connect DB
mongoose.set('strictQuery', true);
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`connected to ${mongoURI} `);
    })
    .catch(err => {
        console.log(err)
    })


//using router
app.use("/", rootRouter)

app.listen(port, () => {
    console.log('Short-content open port 5000')

})

