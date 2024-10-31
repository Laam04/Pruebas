import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './database'; // Asegúrate de que la conexión a la base de datos esté correcta
import routes from './routes'; // Ruta al archivo donde definiste las rutas

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(bodyParser.json());
app.use(routes); // Usar las rutas definidas

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
