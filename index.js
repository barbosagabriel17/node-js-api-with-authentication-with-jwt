const express = require('express');
const app = express();
const dotenv = require('dotenv'); //It does1n need to be imported in every single file where it will be used
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true,  useUnifiedTopology: true},
    () => console.log('Connected to db')
)

//MiddLeware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/posts', postRoute);

app.listen(3000, () => console.log('Server up and running'));