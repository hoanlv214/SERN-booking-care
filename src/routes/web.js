import express from "express";
import homeCtrl from '../controller/homeCtrl'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeCtrl.getHomePage);

    return app.use('/', router)
}

module.exports = initWebRoute;