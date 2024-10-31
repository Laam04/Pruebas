import mongoose, { Schema, Document } from 'mongoose';

// Definimos la interfaz para Espacio de Parqueo
export interface IEspacioParqueo extends Document {
  descripcion: string;
}

// Creamos el esquema de Mongoose
const EspacioParqueoSchema: Schema = new Schema({
  descripcion: { type: String, required: true }
});

// Exportamos el modelo de Mongoose
export const EspacioParqueo = mongoose.model<IEspacioParqueo>('EspacioParqueo', EspacioParqueoSchema);
