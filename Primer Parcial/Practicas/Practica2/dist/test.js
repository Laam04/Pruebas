"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const vehiculo_1 = require("./entity/vehiculo");
const testCreateVehiculo = () => __awaiter(void 0, void 0, void 0, function* () {
    const vehiculoRepository = index_1.AppDataSource.getRepository(vehiculo_1.Vehiculo);
    const nuevoVehiculo = new vehiculo_1.Vehiculo();
    nuevoVehiculo.descripcion = "Sedán";
    nuevoVehiculo.placa = "ABC123";
    nuevoVehiculo.color = "Rojo";
    yield vehiculoRepository.save(nuevoVehiculo);
    const vehiculos = yield vehiculoRepository.find();
    console.log("Vehículos:", vehiculos);
});
index_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source initialized!");
    return testCreateVehiculo();
})
    .catch((err) => {
    console.error("Error during initialization:", err);
});
