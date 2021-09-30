// Import Global Modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Dotenv
require('dotenv').config();

// Set App
const app = express();

// Set Cors
app.use(cors())

// Set Body Parser
app.use(bodyParser.json())

// Set Routes
const {
    test_2
} = require('./routes');
app.get('/', (req, res) => {
    res.status(200).send('Server Stockbit Test no-2 is running...')
});
app.use('/', test_2);

// Parse application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : false }));

// Set Static File
app.use(express.static('public'));

// Check database connection
const db = require('./database/db');
db.connect(err => {
    if(err) throw err;
    console.log('MySQL connected...')
})

// Set PORT
const PORT = process.env.PORT || 2020
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})