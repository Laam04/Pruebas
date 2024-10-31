import { Router } from 'express';
import { vehiculoRepository } from '../repository/vehiculoRepository';
import { VehiculoDTO } from '../dto/vehiculo.dto';

const router = Router();

// Obtener todos los vehículos
router.get('/', async (req, res) => {
    try {
        const vehiculos = await vehiculoRepository.find();
        res.json(vehiculos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los vehículos', error });
    }
});

// Obtener un vehículo por ID
router.get('/:id', async (req, res) => {
    try {
        const vehiculo = await vehiculoRepository.findOne({ where: { id: Number(req.params.id) } });
        if (!vehiculo) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }
        res.json(vehiculo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el vehículo', error });
    }
});

// Crear un nuevo vehículo
router.post('/', async (req, res) => {
    try {
        const nuevoVehiculo = vehiculoRepository.create(req.body);
        await vehiculoRepository.save(nuevoVehiculo);
        res.status(201).json(nuevoVehiculo);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el vehículo', error });
    }
});

// Actualizar un vehículo por ID
router.put('/:id', async (req, res) => {
    try {
        const resultado = await vehiculoRepository.update(req.params.id, req.body);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }
        res.json({ message: 'Vehículo actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el vehículo', error });
    }
});

// Eliminar un vehículo por ID
router.delete('/:id', async (req, res) => {
    try {
        const resultado = await vehiculoRepository.delete(req.params.id);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }
        res.json({ message: 'Vehículo eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el vehículo', error });
    }
});

export default router;
