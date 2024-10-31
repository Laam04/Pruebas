// src/config/database.ts
import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    user: 'root',  // Cambia el usuario según tu configuración de MySQL
    password: '',  // Cambia la contraseña según tu configuración
    database: 'sistema_parqueo',  // Cambia el nombre de la base de datos si es necesario
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
