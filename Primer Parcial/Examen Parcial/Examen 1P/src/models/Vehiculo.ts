import mongoose, { Schema, Document } from 'mongoose';

export interface IVehiculo extends Document {
    descripcion: string;
    placa: string;
    color: string;
    entorno: mongoose.Types.ObjectId; // Nueva propiedad para la relación
}

const VehiculoSchema: Schema = new Schema({
    descripcion: { type: String, required: true },
    placa: { type: String, required: true, unique: true },
    color: { type: String, required: true },
    entorno: { type: Schema.Types.ObjectId, ref: 'Entorno', required: true } // Referencia a Entorno
});

export const Vehiculo = mongoose.model<IVehiculo>('Vehiculos', VehiculoSchema);
