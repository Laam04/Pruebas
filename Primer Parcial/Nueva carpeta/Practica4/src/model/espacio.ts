import mongoose, { Document, Schema } from "mongoose";

interface IEspacioParqueo extends Document {
  descripcion: string;
}

const EspacioParqueoSchema: Schema = new Schema({
  descripcion: { type: String, required: true },
});

export const EspacioParqueo = mongoose.model<IEspacioParqueo>("EspacioParqueo", EspacioParqueoSchema);
