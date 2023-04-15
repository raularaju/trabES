const app = require('./config/express-config');

app.get('/', (req, res, next) => {
    res.send('Hello world!')
    next();
});

app.listen(process.env.PORT, console.log("API listening"));