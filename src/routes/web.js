import express from "express";
import homeCtrl from '../controller/homeCtrl'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeCtrl.getHomePage);
    // router.get('/detail/user/:id', homeCtrl.getDetailPage)
    // // router.get('/create-new-user', homeCtrl.createNewUser)
    // router.post('/create-new-user', homeCtrl.createNewUser);

    // router.post('/delete-user', homeCtrl.deleteUser);
    // router.get('/edit-user/:id', homeCtrl.getEditPage);
    // router.post('/update-user', homeCtrl.postUpdateUser)

    return app.use('/', router)
}

module.exports = initWebRoute;