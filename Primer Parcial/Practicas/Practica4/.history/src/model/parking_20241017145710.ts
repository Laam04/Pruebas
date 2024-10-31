import pool from '../config/database';

export interface IParking {
    idVehiculo: string;
    idParqueo: string;
    fechaEntrada: Date;
    fechaSalida: Date;
}

// Función para crear un registro de parking en la base de datos
export const crearParking = async (parking: IParking): Promise<void> => {
    const { idVehiculo, idParqueo, fechaEntrada, fechaSalida } = parking;
    const query = 'INSERT INTO parking (id_vehiculo, id_parqueo, fecha_entrada, fecha_salida) VALUES (?, ?, ?, ?)';
    
    await pool.query(query, [idVehiculo, idParqueo, fechaEntrada, fechaSalida]);
};
