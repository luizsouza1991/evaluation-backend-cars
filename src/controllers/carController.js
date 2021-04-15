const ControllerBase = require("./base/controller");
const CarDto = require("../dto/carDto");
const Car = require("../models/Car");
const status = require('http-status');

class CarController extends ControllerBase {
    constructor() {
        super(Car, CarDto);
    }

    async sellCar(req, res) {
        try {
            await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
            let car = await Car.findOne({'_id': req.params.id});
            
            return res.status(status.OK).json(new CarDto(car));
        } catch {
            return res.status(status.INTERNAL_SERVER_ERROR).json();
        }
    }

    async search(req, res) {
        try {
            let result = [];
            const data = await Car.find({veiculo: {$regex: req.query.veiculo}});
            result = data.map(data => new CarDto(data));

            return res.status(status.OK).json(result);
        } catch {
            return res.status(status.INTERNAL_SERVER_ERROR).json();
        }
    }
}

module.exports = CarController;