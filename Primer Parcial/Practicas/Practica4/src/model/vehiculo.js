"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
// src/model/vehiculo.ts
var mongoose_1 = require("mongoose");
// Crea el esquema de Mongoose
var VehiculoSchema = new mongoose_1.Schema({
    descripcion: { type: String, required: true },
    placa: { type: String, required: true, unique: true },
    color: { type: String, required: true }
});
// Exporta el modelo de Mongoose
exports.Vehiculo = mongoose_1.default.model('Vehiculos', VehiculoSchema);
