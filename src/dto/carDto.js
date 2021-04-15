const DtoBase = require("./base/dto");

class CarDto extends DtoBase {
    constructor(data, createOrUpdate) {
        super(data, createOrUpdate);
        if (data) {
            data.veiculo ? this.veiculo = data.veiculo : () => {};
            data.marca ? this.marca = data.marca : () => {};
            data.ano ? this.ano = data.ano : () => {};
            data.descricao ? this.descricao = data.descricao : () => {};
            data.vendido ? this.vendido = data.vendido : () => {};
            data.createdAt ? this.created_at = data.createdAt : () => {}
            data.updatedAt ? this.updated_at = data.updatedAt : () => {}
        }
    }
}

module.exports = CarDto;