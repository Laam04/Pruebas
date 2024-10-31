import mongoose, { Schema, Document } from 'mongoose';

// Interfaz para el modelo de Mongoose
export interface IEspacio extends Document {
  descripcion: string;
}

// Crea el esquema de Mongoose
const EspacioSchema: Schema = new Schema({
  descripcion: { type: String, required: true }
});

// Exporta el modelo de Mongoose
export const Espacio = mongoose.model<IEspacio>('Espacios', EspacioSchema);
