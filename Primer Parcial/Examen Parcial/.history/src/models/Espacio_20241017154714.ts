import mongoose, { Schema, Document } from 'mongoose';

export interface IEspacio extends Document {
    descripcion: string;
    entorno: mongoose.Types.ObjectId; // Nueva propiedad para la relación
}

const EspacioSchema: Schema = new Schema({
    descripcion: { type: String, required: true },
    entorno: { type: Schema.Types.ObjectId, ref: 'Entorno', required: true } // Referencia a Entorno
});

export const Espacio = mongoose.model<IEspacio>('Espacio', EspacioSchema);
