import mongoose, { Schema, Document } from 'mongoose';

export interface IEspacio extends Document {
    descripcion: string;
}

const EspacioSchema: Schema = new Schema({
    descripcion: { type: String, required: true }
});

export const Espacio = mongoose.model<IEspacio>('Espacio', EspacioSchema);
