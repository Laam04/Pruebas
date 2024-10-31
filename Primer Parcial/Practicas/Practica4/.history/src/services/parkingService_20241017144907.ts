import { Parking, IParking } from '../model/parking';

// Obtener todos los registros de parking
export async function obtenerParkings(): Promise<IParking[]> {
  return Parking.find().exec();
}

// Crear un nuevo registro de parking
export async function crearParking(parkingData: { idVehiculo: string; idParqueo: string; fechaEntrada: Date; fechaSalida: Date }): Promise<IParking> {
  const nuevoParking = new Parking(parkingData);
  return nuevoParking.save();
}
