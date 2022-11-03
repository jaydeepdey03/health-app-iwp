const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

require('./routes/api')(app);
require('./config/db')()
app.use(cors())

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});