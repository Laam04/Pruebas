import mongoose, { Schema, Document } from 'mongoose';

export interface IParking extends Document {
    idVehiculo: mongoose.Types.ObjectId; // Asumiendo que idVehiculo es un ObjectId de Vehiculo
    idEspacio: mongoose.Types.ObjectId; // Asumiendo que idEspacio es un ObjectId de Espacio
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
