import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
     
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/alquiler-vehiculos');
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
        process.exit(1); 
    }
};

export default connectDB;
