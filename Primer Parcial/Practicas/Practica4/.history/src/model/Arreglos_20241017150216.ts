import conectarDB from '../config/database'; // Importar la conexión a la base de datos
import { Vehiculo } from '../model/vehiculo';
import { Espacio } from '../model/espacio';
import { Parking } from '../model/parking';
import mongoose from 'mongoose';

// Conectar a la base de datos
conectarDB();

// Datos de ejemplo para vehículos, espacios y parking
const datos = {
    vehiculos: [
        { descripcion: 'Sedan', placa: 'ABC123', color: 'Rojo' },
        { descripcion: 'SUV', placa: 'DEF456', color: 'Azul' },
        // Agrega más vehículos aquí
    ],
    espacios: [
        { descripcion: 'Espacio 1' },
        { descripcion: 'Espacio 2' },
        // Agrega más espacios aquí
    ],
    parking: [
        { idVehiculo: 'VehiculoID1', idEspacio: 'EspacioID1', fechaEntrada: new Date(), fechaSalida: new Date() },
        // Agrega más registros de parking aquí
    ]
};

// Migración
(async () => {
    try {
        // Insertar Vehículos
        for (const vehiculo of datos.vehiculos) {
            const nuevoVehiculo = new Vehiculo(vehiculo);
            await nuevoVehiculo.save();
        }
        console.log('Vehículos migrados con éxito.');

        // Insertar Espacios de Parqueo
        for (const espacio of datos.espacios) {
            const nuevoEspacio = new Espacio(espacio);
            await nuevoEspacio.save();
        }
        console.log('Espacios migrados con éxito.');

        // Insertar registros de Parking
        for (const registro of datos.parking) {
            const nuevoRegistro = new Parking(registro);
            await nuevoRegistro.save();
        }
        console.log('Registros de parking migrados con éxito.');

    } catch (error) {
        console.error('Error durante la migración:', error);
    } finally {
        // Cerrar la conexión a la base de datos
        mongoose.connection.close();
    }
})();
