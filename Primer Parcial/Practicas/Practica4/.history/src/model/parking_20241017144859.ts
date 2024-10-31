import mongoose, { Schema, Document } from 'mongoose';

// Interfaz para el modelo de Mongoose
export interface IParking extends Document {
  idVehiculo: string;
  idParqueo: string;
  fechaEntrada: Date;
  fechaSalida: Date;
}

// Crea el esquema de Mongoose
const ParkingSchema: Schema = new Schema({
  idVehiculo: { type: String, required: true },
  idParqueo: { type: String, required: true },
  fechaEntrada: { type: Date, required: true },
  fechaSalida: { type: Date, required: true }
});

// Exporta el modelo de Mongoose
export const Parking = mongoose.model<IParking>('Parking', ParkingSchema);
