// src/services/vehiculoService.ts
import { Vehiculo, IVehiculo, IVehiculoInput } from '../model/vehiculo';

export async function obtenerVehiculos(): Promise<IVehiculo[]> {
  return Vehiculo.find().exec();
}

// Cambia el tipo de parámetro en crearVehiculo
export async function crearVehiculo(vehiculoData: IVehiculoInput): Promise<IVehiculo> {
  const nuevoVehiculo = new Vehiculo(vehiculoData);
  return nuevoVehiculo.save();
}
