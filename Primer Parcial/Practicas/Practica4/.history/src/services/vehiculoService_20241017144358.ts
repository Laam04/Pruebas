// src/services/vehiculoService.ts
import { Vehiculo, IVehiculo } from '../model/vehiculo';

export async function obtenerVehiculos(): Promise<IVehiculo[]> {
  return Vehiculo.find().exec();
}

export async function crearVehiculo(vehiculo: IVehiculo): Promise<IVehiculo> {
  const nuevoVehiculo = new Vehiculo(vehiculo);
  return nuevoVehiculo.save();
}
