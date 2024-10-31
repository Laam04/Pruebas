import mongoose, { Schema, Document } from 'mongoose';

export interface IParking extends Document {
    idVehiculo: mongoose.Types.ObjectId; // Aquí definimos el tipo ObjectId
    idEspacio: mongoose.Types.ObjectId;  // Aquí definimos el tipo ObjectId
    fechaEntrada: Date;
    fechaSalida: Date;
}

const ParkingSchema: Schema = new Schema({
    idVehiculo: { type: Schema.Types.ObjectId, ref: 'Vehiculo', required: true },
    idEspacio: { type: Schema.Types.ObjectId, ref: 'Espacio', required: true },
    fechaEntrada: { type: Date, required: true },
    fechaSalida: { type: Date, required: true }
});

export const Parking = mongoose.model<IParking>('Parking', ParkingSchema);
