import mongoose, { Types } from 'mongoose';
import { Vehiculo, IVehiculo } from '../model/vehiculo';
import { Espacio, IEspacio } from '../model/espacio';
import { Parking, IParking } from '../model/parking';

// Datos de ejemplo para migrar
const datos = {
    vehiculos: [
        { descripcion: 'Sedan', placa: 'ABC123', color: 'Rojo' },
        { descripcion: 'SUV', placa: 'DEF456', color: 'Azul' },
        { descripcion: 'Coupé', placa: 'GHI789', color: 'Verde' },
        { descripcion: 'Convertible', placa: 'JKL012', color: 'Amarillo' },
        { descripcion: 'Furgoneta', placa: 'MNO345', color: 'Negro' }
    ],
    espacios: [
        { descripcion: 'Espacio 1' },
        { descripcion: 'Espacio 2' },
        { descripcion: 'Espacio 3' },
        { descripcion: 'Espacio 4' },
        { descripcion: 'Espacio 5' }
    ],
    parking: [
        // Estos son solo ejemplos, se llenarán con IDs generados después
        { fechaEntrada: new Date(), fechaSalida: new Date() },
        { fechaEntrada: new Date(), fechaSalida: new Date() },
        { fechaEntrada: new Date(), fechaSalida: new Date() }
    ]
};

const migrarDatos = async () => {
    try {
        // Conectar a MongoDB (asegúrate de tener la función de conexión en otro archivo)
        await mongoose.connect('mongodb://localhost:27017/tu_basedatos'); // Cambia 'tu_basedatos' por el nombre de tu base de datos
        console.log('Conexión a MongoDB establecida');

        // Insertar Vehículos
        const vehiculosIds: Types.ObjectId[] = [];
        for (const vehiculo of datos.vehiculos) {
            const nuevoVehiculo = new Vehiculo(vehiculo);
            const vehiculoGuardado: IVehiculo = await nuevoVehiculo.save(); // Asegura que el tipo es IVehiculo
            vehiculosIds.push(vehiculoGuardado._id); // Almacenar el ID del vehículo
        }
        console.log('Vehículos migrados con éxito.');

        // Insertar Espacios de Parqueo
        const espaciosIds: Types.ObjectId[] = [];
        for (const espacio of datos.espacios) {
            const nuevoEspacio = new Espacio(espacio);
            const espacioGuardado: IEspacio = await nuevoEspacio.save(); // Asegura que el tipo es IEspacio
            espaciosIds.push(espacioGuardado._id); // Almacenar el ID del espacio
        }
        console.log('Espacios migrados con éxito.');

        // Insertar registros de Parking
        for (let i = 0; i < datos.parking.length; i++) {
            const registro: IParking = {
                idVehiculo: vehiculosIds[i % vehiculosIds.length], // Asignar un ID de vehículo
                idEspacio: espaciosIds[i % espaciosIds.length],     // Asignar un ID de espacio
                fechaEntrada: datos.parking[i].fechaEntrada,
                fechaSalida: datos.parking[i].fechaSalida
            };
            const nuevoRegistro = new Parking(registro);
            await nuevoRegistro.save();
        }
        console.log('Registros de parking migrados con éxito.');

    } catch (error) {
        console.error('Error durante la migración:', error);
    } finally {
        // Cerrar la conexión a la base de datos
        await mongoose.connection.close();
    }
};

// Ejecutar la función de migración
migrarDatos();
