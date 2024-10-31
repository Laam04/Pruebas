// src/Arreglos.ts
import { crearVehiculo } from './services/vehiculoService';
import { crearEspacio } from './services/espacioService';
import { crearParking } from './services/parkingService';

// Datos de ejemplo
const datos = {
    vehiculos: [
        { id: '1', descripcion: 'Sedan', placa: 'ABC123', color: 'Rojo' },
        { id: '2', descripcion: 'SUV', placa: 'DEF456', color: 'Azul' },
        // Más vehículos...
    ],
    espacios: [
        { id: '1', descripcion: 'Espacio 1' },
        { id: '2', descripcion: 'Espacio 2' },
        // Más espacios...
    ],
    parking: [
        { id: '1', idVehiculo: '1', idParqueo: '1', fechaEntrada: new Date(), fechaSalida: new Date() },
        { id: '2', idVehiculo: '2', idParqueo: '2', fechaEntrada: new Date(), fechaSalida: new Date() },
        // Más registros...
    ]
};

// Migración
(async () => {
    for (const vehiculo of datos.vehiculos) {
        await crearVehiculo(vehiculo);
    }
    for (const espacio of datos.espacios) {
        await crearEspacio(espacio);
    }
    for (const registro of datos.parking) {
        await crearParking(registro);
    }
    console.log('Datos migrados con éxito');
})();
