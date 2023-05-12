const paymentController = require("../controllers/paymentController");
const appConfig = require("../../config/appConfig");
const auth = require("../middlewares/auth");



module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}`;

    app.post(`${baseUrl}/create-order`,auth.isAuthorized,paymentController.createOrder);
    
    app.post(`${baseUrl}/complete-order`,auth.isAuthorized,paymentController.completeOrder);

}