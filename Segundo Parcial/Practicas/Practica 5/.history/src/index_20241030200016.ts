import express from 'express';
import vehiculoRoutes from './routes/vehiculoroutes';
import espacioRoutes from './routes/espacioroutes';
import parquearRoutes from './routes/parquearroutes';

const app = express();
app.use(express.json());

// Rutas
app.use('/api/vehiculo', vehiculoRoutes);
app.use('/api/espacio', espacioRoutes);
app.use('/api/parquear', parquearRoutes);

// Configuración del servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
