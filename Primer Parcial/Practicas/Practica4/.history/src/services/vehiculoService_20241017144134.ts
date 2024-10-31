// src/services/vehiculoService.ts
import pool from '../config/database';
import { Vehiculo } from '../model/vehiculo';

export async function obtenerVehiculos(): Promise<Vehiculo[]> {
    const [rows] = await pool.query('SELECT * FROM Vehiculo');
    return rows as Vehiculo[];
}

export async function crearVehiculo(vehiculo: Vehiculo) {
    const { id, descripcion, placa, color } = vehiculo;
    await pool.query('INSERT INTO Vehiculo (ID, Descripcion, Placa, Color) VALUES (?, ?, ?, ?)', 
                     [id, descripcion, placa, color]);
}
