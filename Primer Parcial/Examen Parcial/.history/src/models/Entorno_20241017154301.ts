import mongoose, { Schema, Document } from 'mongoose';

export interface IEntorno extends Document {
    descripcion: string;
}

const EntornoSchema: Schema = new Schema({
    descripcion: { type: String, required: true, unique: true }
});

export const Entorno = mongoose.model<IEntorno>('Entorno', EntornoSchema);
