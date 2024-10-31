"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espacio = void 0;
var mongoose_1 = require("mongoose");
// Crea el esquema de Mongoose
var EspacioSchema = new mongoose_1.Schema({
    descripcion: { type: String, required: true }
});
// Exporta el modelo de Mongoose
exports.Espacio = mongoose_1.default.model('Espacios', EspacioSchema);
