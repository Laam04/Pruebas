// src/services/parkingService.ts
import pool from '../config/database';
import { Parking } from '../model/parking';

export async function obtenerParking(): Promise<Parking[]> {
    const [rows] = await pool.query('SELECT * FROM Parking');
    return rows as Parking[];
}

export async function crearParking(parking: Parking) {
    const { id, idVehiculo, idParqueo, fechaEntrada, fechaSalida } = parking;
    await pool.query(
        `INSERT INTO Parking (ID, ID_Vehiculo, ID_Parqueo, FechaEntrada, FechaSalida) 
         VALUES (?, ?, ?, ?, ?)`, 
         [id, idVehiculo, idParqueo, fechaEntrada, fechaSalida]
    );
}
