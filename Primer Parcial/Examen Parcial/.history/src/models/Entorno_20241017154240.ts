import mongoose, { Schema, Document } from 'mongoose';

// Definición de la interfaz para la entidad Entorno
export interface IEntorno extends Document {
    descripcion: string;
}

// Definición del esquema para la entidad Entorno
const EntornoSchema: Schema = new Schema({
    descripcion: { type: String, required: true, unique: true }
});

// Exportar el modelo
export const Entorno = mongoose.model<IEntorno>('Entorno', EntornoSchema);
