const RouterBase = require("./base/router")
const CarController = require("../controllers/carController");

class CarRouter extends RouterBase {
    constructor(app) {
        super(app, 'veiculos', new CarController());
    }

    initRouters(app, path, controller) {
        app.route(`/${path}/:id`).patch((req, res) => controller.sellCar(req, res));
        super.initRouters(app, path, controller);
    }
}

module.exports = CarRouter;