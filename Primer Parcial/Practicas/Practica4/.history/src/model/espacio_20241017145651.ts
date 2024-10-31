import pool from '../config/database';

export interface IEspacio {
    descripcion: string;
}

// Función para crear un espacio en la base de datos
export const crearEspacio = async (espacio: IEspacio): Promise<void> => {
    const { descripcion } = espacio;
    const query = 'INSERT INTO espacios (descripcion) VALUES (?)';
    
    await pool.query(query, [descripcion]);
};
