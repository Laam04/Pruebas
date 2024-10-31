import express from 'express';
import { AppDataSource } from './ormconfig';
import parquearRoutes from './routes/parkingroutes';
import vehiculoRoutes from './routes/vehiculoroutes';
import espacioRoutes from './routes/espacioroutes';
import usuarioRoutes from './routes/usuarioroutes'; // Importa las rutas de usuario

const app = express();
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.log('Conexión con la base de datos establecida');
    })
    .catch((error) => console.log('Error de conexión: ', error));

app.use('/api/parquear', parquearRoutes);
app.use('/api/vehiculo', vehiculoRoutes);
app.use('/api/espacio', espacioRoutes);
app.use('/api/usuario', usuarioRoutes); // Agrega las rutas de usuario

app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});
