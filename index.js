require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router =require('./controller/routes');
const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app);

app.use('/api', router);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



app.use('/', (req, res) => {
    res.send('Prodjar server running')
})




mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB)
    .catch(function (error) {
        console.log(`Unable to connect to the Mongo db ${error} `);
    });

mongoose.connection
    .once('open', function () {
        server.listen(PORT, () => {
            console.log("Server is listening on PORT: " + PORT);
        });
    })
    .on('error', function (err) {
        console.log(err);
    });


