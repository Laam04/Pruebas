"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parking = void 0;
var mongoose_1 = require("mongoose");
// Crea el esquema de Mongoose
var ParkingSchema = new mongoose_1.Schema({
    idVehiculo: { type: String, required: true },
    idParqueo: { type: String, required: true },
    fechaEntrada: { type: Date, required: true },
    fechaSalida: { type: Date, required: true }
});
// Exporta el modelo de Mongoose
exports.Parking = mongoose_1.default.model('Parking', ParkingSchema);
