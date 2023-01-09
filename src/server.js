import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import initWebRoute from './routes/web';
import connectionDB from './config/connnectDB'

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

connectionDB();

app.listen(port, () => {
    console.log(`Server listen http://localhost:${port}`)
});