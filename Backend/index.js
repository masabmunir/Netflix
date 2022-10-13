var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db/conn');
 // User Path
const userRoutes = require('./routes/routes');
// Images Path

const imageModal = require('./dataModals/images.modal');
const imageRoutes = require('./routes/images.routes');

// Movies Path
const movieModal = require('./dataModals/movies.modal');
const movieRoutes = require('./routes/movies.routes');

const port = process.env.port || 8000



var allowCrossDomain = function(req, res) {

   res.setHeader('Access-Control-Allow-Origin', "*")

}
app.use(cors({allowCrossDomain}))
// app.use(cors({origin:'http://localhost:4200/'}));
app.use(bodyParser.json());


app.use('/data',userRoutes);

app.use('/',imageRoutes);

app.use('/movies',movieRoutes);


app.listen(port,()=>{

   console.log('Server Started at port 8000');
})
