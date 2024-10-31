// src/model/vehiculo.ts
import mongoose, { Schema, Document } from 'mongoose';

// Define la interfaz para el modelo de Mongoose
export interface IVehiculo extends Document {
  descripcion: string;
  placa: string;
  color: string;
}

// Define la interfaz para los datos de entrada
export interface IVehiculoInput {
  descripcion: string;
  placa: string;
  color: string;
}

// Crea el esquema de Mongoose
const VehiculoSchema: Schema = new Schema({
  descripcion: { type: String, required: true },
  placa: { type: String, required: true, unique: true },
  color: { type: String, required: true }
});

// Exporta el modelo de Mongoose
export const Vehiculo = mongoose.model<IVehiculo>('Vehiculos', VehiculoSchema);
