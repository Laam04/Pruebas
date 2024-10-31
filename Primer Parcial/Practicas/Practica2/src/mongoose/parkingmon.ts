import mongoose, { Schema, Document } from "mongoose";

mongoose.connect("mongodb://localhost:27017/alquiler_vehiculos");

interface IParquear extends Document {
    vehiculoId: number;
    espacioParqueoId: number;
    fechaHoraEntrada: Date;
    fechaHoraSalida: Date;
}

const parquearSchema = new Schema<IParquear>({
    vehiculoId: { type: Number, required: true },
    espacioParqueoId: { type: Number, required: true },
    fechaHoraEntrada: { type: Date, required: true },
    fechaHoraSalida: { type: Date },
});

const ParquearModel = mongoose.model<IParquear>("Parquear", parquearSchema);

const modificarParquear = async (id: string, data: Partial<IParquear>) => {
    return await ParquearModel.findByIdAndUpdate(id, data, { new: true });
};

const eliminarParquear = async (id: string) => {
    return await ParquearModel.findByIdAndDelete(id);
};
export{
    ParquearModel,
    modificarParquear,
    eliminarParquear
}
