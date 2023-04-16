const app = require('./config/express');
/* (async () => {
    const database = require('./database/index.js');
    const User = require('./domains/User/models/User');
    const Product = require('./domains/Product/models/Product');
    await User.sync();
    await Product.sync();
    await database.sync();
})();
 */
app.get('/', (req, res, next) => {
    res.send('Hello world!')
    next();
});

app.listen(process.env.PORT, console.log("API listening"));