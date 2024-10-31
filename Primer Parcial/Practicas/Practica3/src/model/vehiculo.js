"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var mongoose_1 = require("mongoose");
// Definición del esquema de Mongoose
var VehiculoSchema = new mongoose_1.Schema({
    descripcion: { type: String, required: true },
    placa: { type: String, required: true, unique: true },
    color: { type: String, required: true }
});
// Creación del modelo
exports.Vehiculo = mongoose_1.default.model('Vehiculos', VehiculoSchema);
