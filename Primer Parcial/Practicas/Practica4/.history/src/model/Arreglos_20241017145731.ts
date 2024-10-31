import { crearVehiculo } from '../model/vehiculo';
import { crearEspacio } from '../model/espacio';
import { crearParking } from '../model/parking';

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
        { idVehiculo: 'ABC123', idParqueo: 'Espacio 1', fechaEntrada: new Date(), fechaSalida: new Date() },
        // Agrega más registros de parking aquí
    ]
};

// Migración
(async () => {
    try {
        // Insertar Vehículos
        for (const vehiculo of datos.vehiculos) {
            await crearVehiculo(vehiculo);
        }
        console.log('Vehículos migrados con éxito.');

        // Insertar Espacios de Parqueo
        for (const espacio of datos.espacios) {
            await crearEspacio(espacio);
        }
        console.log('Espacios migrados con éxito.');

        // Insertar registros de Parking
        for (const registro of datos.parking) {
            await crearParking(registro);
        }
        console.log('Registros de parking migrados con éxito.');

    } catch (error) {
        console.error('Error durante la migración:', error);
    }
})();
