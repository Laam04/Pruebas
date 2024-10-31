// src/services/espacioService.ts
import { EspacioParqueo, IEspacioParqueo } from '../model/espacio';

export async function obtenerEspacios(): Promise<IEspacioParqueo[]> {
  return EspacioParqueo.find().exec();
}

export async function crearEspacio(espacio: IEspacioParqueo): Promise<IEspacioParqueo> {
  const nuevoEspacio = new EspacioParqueo(espacio);
  return nuevoEspacio.save();
}
