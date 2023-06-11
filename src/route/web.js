import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', homeController.gethomepage);

    
    router.get('/trangchu', homeController.home); // /HomePage/ejs/trangchu

    return app.use("/", router); 
}

module.exports = initWebRouter;