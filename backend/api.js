const api = (app) => {
    app.get('/api', (req, res) => {
        res.send('Hello World!');
    });
}

module.exports = api;