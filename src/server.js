import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
const methodOverride = require('method-override');
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8080;
//port === undefined => port = 8080

app.listen(port, () => {
    //callback
    console.log(`BE nodejs is running on port http://localhost:${port}`);
});
