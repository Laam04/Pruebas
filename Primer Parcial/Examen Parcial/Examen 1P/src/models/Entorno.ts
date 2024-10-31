import mongoose, { Schema, Document } from 'mongoose';

// Interfaz para el entorno
export interface IEntorno extends Document {
    descripcion: string;
}

// Esquema para el entorno
const EntornoSchema: Schema = new Schema({
    descripcion: { type: String, required: true }
});

// Modelo para el entorno
export const Entorno = mongoose.model<IEntorno>('Entorno', EntornoSchema);
