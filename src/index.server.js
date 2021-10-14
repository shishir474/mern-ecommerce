const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// environment variables or u can say constants
env.config();
 
app.use(bodyParser());

//mongodvb connection string
// mongodb+srv://Shishir:<password>@cluster0.pi86f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.pi86f.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    
).then(() => {
    console.log('Database Connected');
});
// Hello APi
app.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Hello from Server'
    });
});

app.post('/data', (req,res,next) => {
    res.status(200).json({
        message: req.body
    });
});


console.log(process.env.PORT);
app.listen(8000, () => {
    console.log('Server is running on port 8000');
})