import express from 'express';
import { Vehiculo } from './models/Vehiculo';
import { Espacio } from './models/Espacio';
import { Parking } from './models/Parking';
import { Entorno } from './models/Entorno';

const router = express.Router();

// Método PUT para actualizar el entorno de un elemento
router.put('/update-environment', async (req, res) => {
    const { entidad, id, idEntorno } = req.body;

    try {
        // Validar que se recibieron los parámetros necesarios
        if (!entidad || !id || !idEntorno) {
            return res.status(400).json({ message: 'Faltan parámetros requeridos.' });
        }

        // Validar el ID del entorno
        const entorno = await Entorno.findById(idEntorno);
        if (!entorno) {
            return res.status(404).json({ message: 'Entorno no encontrado.' });
        }

        let updatedElement;
        switch (entidad) {
            case 'vehiculo':
                updatedElement = await Vehiculo.findByIdAndUpdate(id, { idEntorno }, { new: true });
                break;
            case 'espacio':
                updatedElement = await Espacio.findByIdAndUpdate(id, { idEntorno }, { new: true });
                break;
            case 'parking':
                updatedElement = await Parking.findByIdAndUpdate(id, { idEntorno }, { new: true });
                break;
            default:
                return res.status(400).json({ message: 'Entidad no válida.' });
        }

        // Verificar si se actualizó el elemento
        if (!updatedElement) {
            return res.status(404).json({ message: 'Elemento no encontrado.' });
        }

        res.status(200).json({ message: 'Entorno actualizado con éxito.', data: updatedElement });
    } catch (error) {
        console.error('Error al actualizar el entorno:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});

export default router;
