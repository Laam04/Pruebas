import mongoose from 'mongoose';

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/sistema_parqueo'); // Reemplaza 'tu_basedatos' con el nombre de tu base de datos
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Salir del proceso en caso de error
    }
};

export default conectarDB;
