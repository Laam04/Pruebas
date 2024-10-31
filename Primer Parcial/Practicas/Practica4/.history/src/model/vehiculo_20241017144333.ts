import mongoose, { Schema, Document } from 'mongoose';

// Definimos la interfaz para Vehículo
export interface IVehiculo extends Document {
  descripcion: string;
  placa: string;
  color: string;
}

// Creamos el esquema de Mongoose
const VehiculoSchema: Schema = new Schema({
  descripcion: { type: String, required: true },
  placa: { type: String, required: true, unique: true },
  color: { type: String, required: true }
});

// Exportamos el modelo de Mongoose
export const Vehiculo = mongoose.model<IVehiculo>('Vehiculos', VehiculoSchema);
