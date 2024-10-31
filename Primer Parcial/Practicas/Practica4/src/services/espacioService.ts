import { Espacio, IEspacio } from '../model/espacio';

// Obtener todos los espacios
export async function obtenerEspacios(): Promise<IEspacio[]> {
  return Espacio.find().exec();
}

// Crear un nuevo espacio
export async function crearEspacio(espacioData: { descripcion: string }): Promise<IEspacio> {
  const nuevoEspacio = new Espacio(espacioData);
  return nuevoEspacio.save();
}
