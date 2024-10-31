import mongoose, { Schema, Document } from 'mongoose';

export interface IParquear extends Document {
    placa: string;  
    fechahoradeentrada: Date;
    fechahorasalida: Date;
}
const ParquearSchema: Schema = new Schema({
    placa: { type: String, required: true },  
    fechahoradeentrada: { type: Date, required: true },
    fechahorasalida: { type: Date, required: true },
});

export const Parquear = mongoose.model<IParquear>('Parking', ParquearSchema);
