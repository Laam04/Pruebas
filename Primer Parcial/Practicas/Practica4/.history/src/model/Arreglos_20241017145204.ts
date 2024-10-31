import { crearVehiculo } from '../services/vehiculoService';
import { crearEspacio } from '../services/espacioService';
import { crearParking } from '../services/parkingService';

// Datos de ejemplo para vehículos, espacios y parking
const datos = {
    vehiculos: [
        { descripcion: 'Sedan', placa: 'ABC123', color: 'Rojo' },
        { descripcion: 'SUV', placa: 'DEF456', color: 'Azul' },
        { descripcion: 'Coupé', placa: 'GHI789', color: 'Verde' },
        { descripcion: 'Hatchback', placa: 'JKL012', color: 'Negro' },
        { descripcion: 'Camioneta', placa: 'MNO345', color: 'Blanco' },
        { descripcion: 'Convertible', placa: 'PQR678', color: 'Amarillo' },
        { descripcion: 'Familiar', placa: 'STU901', color: 'Gris' },
        { descripcion: 'Deportivo', placa: 'VWX234', color: 'Naranja' },
        { descripcion: 'SUV Compacto', placa: 'YZA567', color: 'Morado' },
        { descripcion: 'Monovolumen', placa: 'BCD890', color: 'Celeste' }
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
        { idVehiculo: 'ABC123', idParqueo: 'Espacio 1', fechaEntrada: new Date('2024-10-01T08:00:00Z'), fechaSalida: new Date('2024-10-01T10:00:00Z') },
        { idVehiculo: 'DEF456', idParqueo: 'Espacio 2', fechaEntrada: new Date('2024-10-02T09:00:00Z'), fechaSalida: new Date('2024-10-02T12:00:00Z') },
        { idVehiculo: 'GHI789', idParqueo: 'Espacio 3', fechaEntrada: new Date('2024-10-03T10:00:00Z'), fechaSalida: new Date('2024-10-03T11:00:00Z') },
        { idVehiculo: 'JKL012', idParqueo: 'Espacio 4', fechaEntrada: new Date('2024-10-04T11:30:00Z'), fechaSalida: new Date('2024-10-04T13:00:00Z') },
        { idVehiculo: 'MNO345', idParqueo: 'Espacio 5', fechaEntrada: new Date('2024-10-05T14:00:00Z'), fechaSalida: new Date('2024-10-05T15:00:00Z') },
        { idVehiculo: 'PQR678', idParqueo: 'Espacio 6', fechaEntrada: new Date('2024-10-06T16:00:00Z'), fechaSalida: new Date('2024-10-06T17:30:00Z') },
        { idVehiculo: 'STU901', idParqueo: 'Espacio 7', fechaEntrada: new Date('2024-10-07T08:30:00Z'), fechaSalida: new Date('2024-10-07T10:30:00Z') },
        { idVehiculo: 'VWX234', idParqueo: 'Espacio 8', fechaEntrada: new Date('2024-10-08T09:00:00Z'), fechaSalida: new Date('2024-10-08T11:00:00Z') },
        { idVehiculo: 'YZA567', idParqueo: 'Espacio 9', fechaEntrada: new Date('2024-10-09T10:00:00Z'), fechaSalida: new Date('2024-10-09T11:30:00Z') },
        { idVehiculo: 'BCD890', idParqueo: 'Espacio 10', fechaEntrada: new Date('2024-10-10T12:00:00Z'), fechaSalida: new Date('2024-10-10T14:00:00Z') }
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

        // Insertar registros de Parking (Asegúrate de que IDs de Vehículos y Espacios sean correctos)
        for (const registro of datos.parking) {
            await crearParking(registro);
        }
        console.log('Registros de parking migrados con éxito.');

    } catch (error) {
        console.error('Error durante la migración:', error);
    }
})();
