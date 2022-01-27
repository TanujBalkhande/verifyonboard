const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const port = process.env.PORT || 3000

//Import Routes
const aadharRoute = require('./routes/aadhars');
app.use('/aadhars', aadharRoute);

const bothRoute = require('./routes/both');
app.use('/both', bothRoute);

const panRoute = require('./routes/pan');
app.use('/pan', panRoute);

const uidRoute = require('./routes/uid');
app.use('/uid', uidRoute);

app.get('/',(req,res) => {
    res.send('we are on home');
});




mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },() =>
    console.log('connected to DB!')
);

app.listen(port, () => console.log('Listening on port ${port}'))