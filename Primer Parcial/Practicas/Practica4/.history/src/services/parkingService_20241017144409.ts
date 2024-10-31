// src/services/parkingService.ts
import { Parking, IParking } from '../model/parking';

export async function obtenerParking(): Promise<IParking[]> {
  return Parking.find()
                .populate('idVehiculo')  // Para obtener el detalle del Vehículo relacionado
                .populate('idParqueo')    // Para obtener el detalle del Espacio de Parqueo relacionado
                .exec();
}

export async function crearParking(parking: IParking): Promise<IParking> {
  const nuevoParking = new Parking(parking);
  return nuevoParking.save();
}
