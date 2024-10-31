import mongoose, { Schema, Document } from 'mongoose';
export interface IVehiculo extends Document {
  descripcion: string;
  placa: string;
  color: string;
}

const VehiculoSchema: Schema = new Schema({
  descripcion: { type: String, required: true },
  placa: { type: String, required: true, unique: true },
  color: { type: String, required: true }
});

export const Vehiculo = mongoose.model<IVehiculo>('Vehiculos', VehiculoSchema);
