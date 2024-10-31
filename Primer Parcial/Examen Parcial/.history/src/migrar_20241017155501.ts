import connectDB from './database';
import { Vehiculo } from './models/Vehiculo';
import { Espacio } from './models/Espacio';
import { Parking } from './models/Parking';
import { Entorno, IEntorno } from './models/Entorno';
import mongoose from 'mongoose';

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

const migrarDatos = async () => {
    await connectDB();

    try {
   
        const vehiculosIds: mongoose.Types.ObjectId[] = [];
        const espaciosIds: mongoose.Types.ObjectId[] = [];
        const entornosIds: mongoose.Types.ObjectId[] = [];


        const entornos = [
            { descripcion: 'DESARROLLO' },
            { descripcion: 'PRUEBAS' },
            { descripcion: 'PRODUCCION' }
        ];

        for (const entorno of entornos) {
            const nuevoEntorno = new Entorno(entorno);
            const entornoGuardado = await nuevoEntorno.save();
            entornosIds.push(entornoGuardado._id as mongoose.Types.ObjectId); 
        }
        console.log('Entornos migrados con éxito.');


        for (const vehiculo of datos.vehiculos) {
            const nuevoVehiculo = new Vehiculo({ ...vehiculo, entorno: entornosIds[1] }); // Asignar entorno de PRUEBAS
            const vehiculoGuardado = await nuevoVehiculo.save();
            vehiculosIds.push(vehiculoGuardado._id as mongoose.Types.ObjectId);
        }
        console.log('Vehículos migrados con éxito.');

        // Migrar espacios
        for (const espacio of datos.espacios) {
            const nuevoEspacio = new Espacio({ ...espacio, entorno: entornosIds[1] }); // Asignar entorno de PRUEBAS
            const espacioGuardado = await nuevoEspacio.save();
            espaciosIds.push(espacioGuardado._id as mongoose.Types.ObjectId);
        }
        console.log('Espacios migrados con éxito.');

        // Migrar registros de parking
        for (let i = 0; i < datos.parking.length; i++) {
            const nuevoRegistro = new Parking({
                idVehiculo: vehiculosIds[i % vehiculosIds.length],
                idEspacio: espaciosIds[i % espaciosIds.length],
                fechaEntrada: datos.parking[i].fechaEntrada,
                fechaSalida: datos.parking[i].fechaSalida,
                entorno: entornosIds[1] // Asignar entorno de PRUEBAS
            });
            await nuevoRegistro.save();
        }
        console.log('Registros de parking migrados con éxito.');

    } catch (error) {
        console.error('Error durante la migración:', error);
    } finally {
        await mongoose.connection.close();
    }
};

// Ejecutar la migración
migrarDatos();
