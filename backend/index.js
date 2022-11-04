const express = require('express');
const app = express();
const port = 5000;

// app.use(require('cors')())
// apply body parser
app.use(express.json());

require('./routes/api')(app);
require('./config/db')()
// app.use(cors())

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});