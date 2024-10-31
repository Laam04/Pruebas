import mongoose, { Schema, Document } from 'mongoose';

// Definimos la interfaz para Parking
export interface IParking extends Document {
  idVehiculo: mongoose.Types.ObjectId;
  idParqueo: mongoose.Types.ObjectId;
  fechaEntrada: Date;
  fechaSalida: Date;
}

// Creamos el esquema de Mongoose
const ParkingSchema: Schema = new Schema({
  idVehiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehiculos', required: true },
  idParqueo: { type: mongoose.Schema.Types.ObjectId, ref: 'EspacioParqueo', required: true },
  fechaEntrada: { type: Date, required: true },
  fechaSalida: { type: Date, required: true }
});

// Exportamos el modelo de Mongoose
export const Parking = mongoose.model<IParking>('Parking', ParkingSchema);
