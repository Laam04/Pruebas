import mongoose, { Schema, Document } from 'mongoose';

export interface IParking extends Document {
    idVehiculo: mongoose.Types.ObjectId;
    idEspacio: mongoose.Types.ObjectId;
    fechaEntrada: Date;
    fechaSalida: Date;
    entorno: mongoose.Types.ObjectId; // Nueva propiedad para la relación
}

const ParkingSchema: Schema = new Schema({
    idVehiculo: { type: Schema.Types.ObjectId, ref: 'Vehiculos', required: true },
    idEspacio: { type: Schema.Types.ObjectId, ref: 'Espacio', required: true },
    fechaEntrada: { type: Date, required: true },
    fechaSalida: { type: Date, required: true },
    entorno: { type: Schema.Types.ObjectId, ref: 'Entorno', required: true } // Referencia a Entorno
});

export const Parking = mongoose.model<IParking>('Parking', ParkingSchema);
