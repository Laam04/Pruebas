
import { mostrarVehiculos, mostrarEspaciosParqueo, buscarVehiculoPorId, buscarEspacioAsync } from './funciones';

console.log("Lista de Vehículos:");
mostrarVehiculos();
console.log("\nLista de Espacios de Parqueo:");

mostrarEspaciosParqueo();
console.log("\nBuscando Vehículo con ID:");

buscarVehiculoPorId(3, (vehiculo) => {
  if (vehiculo) {
    console.log("Vehículo encontrado:", vehiculo);
  } else {
    console.log("Vehículo no encontrado.");
  }
}
);

console.log("\nBuscando Espacio de Parqueo con ID 2:");
buscarEspacioAsync(2);
