import mongoose, { Schema, Document } from 'mongoose';

export interface IParking extends Document {
    idVehiculo: mongoose.Types.ObjectId; // ID del vehículo
    idEspacio: mongoose.Types.ObjectId;   // ID del espacio
    fechaEntrada: Date;                    // Fecha y hora de entrada
    fechaSalida: Date;                     // Fecha y hora de salida
}

const ParkingSchema: Schema = new Schema({
    idVehiculo: { type: Schema.Types.ObjectId, ref: 'Vehiculo', required: true },
    idEspacio: { type: Schema.Types.ObjectId, ref: 'Espacio', required: true },
    fechaEntrada: { type: Date, required: true },
    fechaSalida: { type: Date, required: true }
});

export const Parking = mongoose.model<IParking>('Parking', ParkingSchema);
