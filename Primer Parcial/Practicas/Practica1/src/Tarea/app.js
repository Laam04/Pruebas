"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funciones_1 = require("./funciones");
console.log("Lista de Vehículos:");
(0, funciones_1.mostrarVehiculos)();
console.log("\nLista de Espacios de Parqueo:");
(0, funciones_1.mostrarEspaciosParqueo)();
console.log("\nBuscando Vehículo con ID:");
(0, funciones_1.buscarVehiculoPorId)(3, function (vehiculo) {
    if (vehiculo) {
        console.log("Vehículo encontrado:", vehiculo);
    }
    else {
        console.log("Vehículo no encontrado.");
    }
});
console.log("\nBuscando Espacio de Parqueo con ID 2:");
(0, funciones_1.buscarEspacioAsync)(2);
