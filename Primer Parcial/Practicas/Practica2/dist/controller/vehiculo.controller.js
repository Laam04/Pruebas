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
exports.obtenerVehiculos = exports.crearVehiculo = void 0;
const index_1 = require("../index");
const vehiculo_1 = require("../entity/vehiculo");
const vehiculoRepository = index_1.AppDataSource.getRepository(vehiculo_1.Vehiculo);
const crearVehiculo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoVehiculo = vehiculoRepository.create(data);
    return yield vehiculoRepository.save(nuevoVehiculo);
});
exports.crearVehiculo = crearVehiculo;
const obtenerVehiculos = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield vehiculoRepository.find();
});
exports.obtenerVehiculos = obtenerVehiculos;
