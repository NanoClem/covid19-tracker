// LIBS
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// ENV
require('dotenv').config();
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const apiRoutes = require('./routes');

// CORS
app.use(cors());

// JSON parser
app.use(bodyParser.urlencoded ( {extended : true} ));
app.use(bodyParser.json())

// Api routes
app.use(apiRoutes);

// Start express server
app.listen(PORT, ()=> console.log(`Listening on http://${HOST}:${PORT}`));

// Connect to mongodb
const DB = process.env.MONGO_URL;
mongoose.connect(DB, {useNewUrlParser: true }, err => {
    if (err) 
        throw err;
    console.log(`Connecting to database ${DB}`);
});