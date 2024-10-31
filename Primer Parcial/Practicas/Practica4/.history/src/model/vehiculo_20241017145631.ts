import pool from '../config/database'; // Asegúrate de que pool esté configurado para MySQL

export interface IVehiculo {
    descripcion: string;
    placa: string;
    color: string;
}

// Función para crear un vehículo en la base de datos
export const crearVehiculo = async (vehiculo: IVehiculo): Promise<void> => {
    const { descripcion, placa, color } = vehiculo;
    const query = 'INSERT INTO vehiculos (descripcion, placa, color) VALUES (?, ?, ?)';
    
    await pool.query(query, [descripcion, placa, color]);
};
