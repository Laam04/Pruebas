import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
export interface IUsuario extends Document {
  nombre: string;
  clave: string;
  estado: string;
  compararClave(clave: string): Promise<boolean>;
}
interface IUsuarioModel extends Model<IUsuario> {
  compararClave(clave: string): Promise<boolean>;
}

const UsuarioSchema: Schema<IUsuario> = new Schema({
  nombre: { type: String, required: true, unique: true },
  clave: { type: String, required: true },
  estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
});
UsuarioSchema.pre<IUsuario>('save', async function (next) {
  const usuario = this;
  

  if (!usuario.isModified('clave')) return next();

  const salt = await bcrypt.genSalt(10);
  usuario.clave = await bcrypt.hash(usuario.clave, salt);
  next();
});

UsuarioSchema.methods.compararClave = function (clave: string): Promise<boolean> {
  return bcrypt.compare(clave, this.clave);
};

export const Usuario = mongoose.model<IUsuario, IUsuarioModel>('Usuario', UsuarioSchema);
