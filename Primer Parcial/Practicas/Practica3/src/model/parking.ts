import mongoose, { Document, Schema } from "mongoose";

interface IParquear extends Document {
  vehiculoId: mongoose.Types.ObjectId;
  parqueoId: mongoose.Types.ObjectId;
  fechaHoraEntrada: Date;
  fechaHoraSalida: Date;
}

const ParquearSchema: Schema = new Schema({
  vehiculoId: { type: Schema.Types.ObjectId, ref: "Vehiculo", required: true },
  parqueoId: { type: Schema.Types.ObjectId, ref: "EspacioParqueo", required: true },
  fechaHoraEntrada: { type: Date, required: true },
  fechaHoraSalida: { type: Date },
});

export default mongoose.model<IParquear>("Parquear", ParquearSchema);
