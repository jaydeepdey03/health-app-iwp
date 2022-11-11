const express = require('express');
const app = express();
const port = 5000;
require('./config/db')()
const CookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config()
const corsOption = require('./config/corsOption');
const credentials = require('./middleware/credentials');

app.use(credentials);
app.use(cors(corsOption))
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(CookieParser())

require('./routes/api')(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});