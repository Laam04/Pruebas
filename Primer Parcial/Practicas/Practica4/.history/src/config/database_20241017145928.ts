import mongoose from 'mongoose';

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/sistema_parqueo', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};

export default conectarDB;
