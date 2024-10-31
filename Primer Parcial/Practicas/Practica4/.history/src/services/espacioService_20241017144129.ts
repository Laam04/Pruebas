// src/services/espacioService.ts
import pool from '../config/database';
import { EspacioParqueo } from '../model/espacio';

export async function obtenerEspacios(): Promise<EspacioParqueo[]> {
    const [rows] = await pool.query('SELECT * FROM EspacioParqueo');
    return rows as EspacioParqueo[];
}

export async function crearEspacio(espacio: EspacioParqueo) {
    const { id, descripcion } = espacio;
    await pool.query('INSERT INTO EspacioParqueo (ID, Descripcion) VALUES (?, ?)', 
                     [id, descripcion]);
}
