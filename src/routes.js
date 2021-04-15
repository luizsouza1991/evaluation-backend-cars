const CarRouter = require("./routers/carRouter");
class Routes {
    constructor(app) {
        new CarRouter(app);
    }
}

module.exports = Routes;