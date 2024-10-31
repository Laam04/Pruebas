import mongoose from 'mongoose';
import connectDB from './database';
import { Entorno } from './models/Entorno'; // Asegúrate de importar el modelo

const entornos = [
    { descripcion: 'DESARROLLO' },
    { descripcion: 'PRUEBAS' },
    { descripcion: 'PRODUCCION' }
];

const migrarEntornos = async () => {
    await connectDB();

    try {
        for (const entorno of entornos) {
            const nuevoEntorno = new Entorno(entorno);
            await nuevoEntorno.save();
        }
        console.log('Entornos migrados con éxito.');
    } catch (error) {
        console.error('Error durante la migración de entornos:', error);
    } finally {
        await mongoose.connection.close();
    }
};

migrarEntornos();
