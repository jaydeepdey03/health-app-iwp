const express = require('express');
const app = express();
const port = 3000;

require('./api')(app);
require('./config/db')()


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});