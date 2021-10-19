const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes =  require('./routes/category');
const productRoutes =  require('./routes/product');
const cartRoutes =  require('./routes/cart');

// environment variables or u can say constants
env.config();
 
app.use(express.json());
// express.static middleware added to expose my static files towards the browser. Whenver req comes to '/public' it will map uploads. hence specified as the first argument
app.use('/public', express.static(path.join(__dirname, 'uploads')));

// all api's are prefixed with /api
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.pi86f.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Database Connected');
});



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})