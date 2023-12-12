const app = require('./app');

const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
mongoose.connect(process.env.DATABASE);

mongoose
    .connect(process.env.DATABASE)
    .then(result => {
        app.listen(port);
        console.log(`Server listening at http://localhost:${port}`)
    }).catch(err => {
        console.log(err);
    });

