import { crearVehiculo } from '../services/vehiculoService';
import { crearEspacio } from '../services/espacioService';
import { crearParking } from '../services/parkingService';

const datos = {
    vehiculos: [
        { descripcion: 'Sedan', placa: 'ABC123', color: 'Rojo' },
        { descripcion: 'SUV', placa: 'DEF456', color: 'Azul' },
        // Más vehículos...
    ],
    espacios: [
        { descripcion: 'Espacio 1' },
        { descripcion: 'Espacio 2' },
        // Más espacios...
    ],
    parking: [
        { idVehiculo: 'ID_DEL_VEHICULO_1', idParqueo: 'ID_DEL_PARQUEO_1', fechaEntrada: new Date(), fechaSalida: new Date() },
        { idVehiculo: 'ID_DEL_VEHICULO_2', idParqueo: 'ID_DEL_PARQUEO_2', fechaEntrada: new Date(), fechaSalida: new Date() },
        // Más registros...
    ]
};

// Migración
(async () => {
    // Insertar Vehículos
    for (const vehiculo of datos.vehiculos) {
        await crearVehiculo(vehiculo);
    }

    // Insertar Espacios de Parqueo
    for (const espacio of datos.espacios) {
        await crearEspacio(espacio);
    }

    // Insertar registros de Parking (Asegúrate de que IDs de Vehículos y Espacios sean correctos)
    for (const registro of datos.parking) {
        await crearParking(registro);
    }

    console.log('Datos migrados con éxito');
})();
