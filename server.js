const express = require('express');
const bodyParser = require('body-parser');

                



const app = express();

/* Middleware */

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


/* Routs */

const viewersRoutes = require('./routes/Viesers.js');
app.use('/vieswers',  viewersRoutes);

const port = 300;


app.listen(port, () => {
    console.log('The port is: ', port);
});