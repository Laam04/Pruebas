// src/services/vehiculoService.ts
import { Vehiculo, IVehiculo } from '../model/vehiculo';

export async function obtenerVehiculos(): Promise<IVehiculo[]> {
  return Vehiculo.find().exec();
}

// Cambia la función crearVehiculo para usar el constructor de Mongoose
export async function crearVehiculo(vehiculoData: { descripcion: string; placa: string; color: string; }): Promise<IVehiculo> {
  const nuevoVehiculo = new Vehiculo(vehiculoData);
  return nuevoVehiculo.save();
}
