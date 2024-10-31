import 'reflect-metadata'; // Necesario para TypeORM
import express from 'express';
import { AppDataSource } from './ormconfig';
import parquearRoutes from './routes/parquearroutes';
import vehiculoRoutes from './routes/vehiculoroutes';
import espacioRoutes from './routes/espacioroutes';

const app = express();
const PORT = process.env.PORT || 3000; // Permite que el puerto sea configurable a través de variables de entorno

app.use(express.json()); // Middleware para parsear el cuerpo de la solicitud JSON

// Inicializar la conexión a la base de datos
AppDataSource.initialize()
    .then(() => {
        console.log('Conexión con la base de datos establecida');

        // Usar las rutas después de que la base de datos esté conectada
        app.use('/api/parquear', parquearRoutes);
        app.use('/api/vehiculo', vehiculoRoutes);
        app.use('/api/espacio', espacioRoutes);

        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error de conexión: ', error);
        process.exit(1); // Salir del proceso si no se puede conectar a la base de datos
    });

app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

