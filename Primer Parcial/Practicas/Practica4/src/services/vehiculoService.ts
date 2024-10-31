// src/services/vehiculoService.ts
import { Vehiculo, IVehiculo } from '../model/vehiculo';

export async function obtenerVehiculos(): Promise<IVehiculo[]> {
  return Vehiculo.find().exec();
}

// Cambia el tipo de parámetro en crearVehiculo
export async function crearVehiculo(vehiculoData:): Promise<IVehiculo> {
  const nuevoVehiculo = new Vehiculo(vehiculoData);
  return nuevoVehiculo.save();
}
