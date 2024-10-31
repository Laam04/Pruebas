import connectDB from './database'; // Importar la conexión a la base de datos
import { Vehiculo } from './models/Vehiculo'; // Importar el modelo Vehiculo
import { Espacio } from './models/Espacio'; // Importar el modelo Espacio
import { Parking } from './models/Parking'; // Importar el modelo Parking
import mongoose from 'mongoose';

// Definir los datos a migrar
const datos = {
    vehiculos: [
        { descripcion: 'Sedan', placa: 'ABC123', color: 'Rojo' },
        { descripcion: 'SUV', placa: 'DEF456', color: 'Azul' },
        { descripcion: 'Coupé', placa: 'GHI789', color: 'Verde' },
        { descripcion: 'Convertible', placa: 'JKL012', color: 'Amarillo' },
        { descripcion: 'Furgoneta', placa: 'MNO345', color: 'Negro' },
        { descripcion: 'Camioneta', placa: 'PQR678', color: 'Blanco' },
        { descripcion: 'Hatchback', placa: 'STU901', color: 'Gris' },
        { descripcion: 'Deportivo', placa: 'VWX234', color: 'Naranja' },
        { descripcion: 'Monovolumen', placa: 'YZA567', color: 'Morado' },
        { descripcion: 'Todoterreno', placa: 'BCD890', color: 'Verde oscuro' }
    ],
    espacios: [
        { descripcion: 'Espacio 1' },
        { descripcion: 'Espacio 2' },
        { descripcion: 'Espacio 3' },
        { descripcion: 'Espacio 4' },
        { descripcion: 'Espacio 5' },
        { descripcion: 'Espacio 6' },
        { descripcion: 'Espacio 7' },
        { descripcion: 'Espacio 8' },
        { descripcion: 'Espacio 9' },
        { descripcion: 'Espacio 10' }
    ],
    parking: [
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: null },
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: null },
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: null },
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: null },
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: null },
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: null },
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: null },
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: null },
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: null },
        { idVehiculo: null, idEspacio: null, fechaEntrada: new Date(), fechaSalida: null }
    ]
};

// Función para migrar los datos a la base de datos
const migrarDatos = async () => {
    await connectDB(); // Establecer conexión a la base de datos

    try {
        const vehiculosIds: any[] = [];
        // Migrar vehículos
        for (const vehiculo of datos.vehiculos) {
            const nuevoVehiculo = new Vehiculo(vehiculo);
            const vehiculoGuardado = await nuevoVehiculo.save();
            vehiculosIds.push(vehiculoGuardado._id);
        }
        console.log('Vehículos migrados con éxito.');

        const espaciosIds: any[] = [];
        // Migrar espacios de parqueo
        for (const espacio of datos.espacios) {
            const nuevoEspacio = new Espacio(espacio);
            const espacioGuardado = await nuevoEspacio.save();
            espaciosIds.push(espacioGuardado._id);
        }
        console.log('Espacios migrados con éxito.');

        // Migrar registros de parking
        for (let i = 0; i < datos.parking.length; i++) {
            const nuevoRegistro = new Parking({
                idVehiculo: vehiculosIds[i % vehiculosIds.length],
                idEspacio: espaciosIds[i % espaciosIds.length],
                fechaEntrada: datos.parking[i].fechaEntrada,
                fechaSalida: datos.parking[i].fechaSalida
            });
            await nuevoRegistro.save();
        }
        console.log('Registros de parking migrados con éxito.');

    } catch (error) {
        console.error('Error durante la migración:', error);
    } finally {
        await mongoose.connection.close(); // Cerrar la conexión a la base de datos
    }
};

// Ejecutar la migración
migrarDatos();
