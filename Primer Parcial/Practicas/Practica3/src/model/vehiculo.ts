import mongoose, { Schema, Document } from 'mongoose';
export interface IVehiculo extends Document {
  descripcion: string;
  placa: string;
  color: string;
}

// Definición del esquema de Mongoose
const VehiculoSchema: Schema = new Schema({
  descripcion: { type: String, required: true },
  placa: { type: String, required: true, unique: true },
  color: { type: String, required: true }
});

// Creación del modelo
export const Vehiculo = mongoose.model<IVehiculo>('Vehiculos', VehiculoSchema);
