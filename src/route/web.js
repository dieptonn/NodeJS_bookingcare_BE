import express from 'express';
import homeController from '../controllers/homecontroller.js';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.editCRUD);
    router.put('/put-crud', homeController.putCRUD);
    // router.delete('/delete-crud', homeController.deleteCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    return app.use('/', router);
};

module.exports = initWebRoutes;
