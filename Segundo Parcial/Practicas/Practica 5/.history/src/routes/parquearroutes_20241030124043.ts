import { Router } from 'express';
import { parquearRepository } from '../repository/parquearRepository'; 
import { Espacio } from '../model/espacio'; 
import { Vehiculo } from '../model/vehiculo'; 
import { espacioRepository } from '../repository/espacioRepository'; // Importa el repositorio
import { vehiculoRepository } from '../repository/vehiculoRepository'; // Importa el repositorio

const router = Router();

router.get('/', async (req, res) => {
    try {
        const parqueos = await parquearRepository.find();
        res.json(parqueos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los parqueos', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const parquear = await parquearRepository.findOneBy({ id: Number(req.params.id) });
        if (!parquear) {
            return res.status(404).json({ message: 'Parqueo no encontrado' });
        }
        res.json(parquear);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el parqueo', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const { espacioId, vehiculoId, fechaIngreso } = req.body;

        // Verifica que el espacio y vehículo existan
        const espacio = await espacioRepository.findOneBy({ id: espacioId });
        const vehiculo = await vehiculoRepository.findOneBy({ id: vehiculoId });

        // Verifica que el espacio y el vehículo no sean nulos
        if (!espacio) {
            return res.status(400).json({ message: 'Espacio no encontrado' });
        }
        if (!vehiculo) {
            return res.status(400).json({ message: 'Vehículo no encontrado' });
        }

        // Crea un nuevo registro de parqueo
        const nuevoParquear = parquearRepository.create({
            espacio: espacio, // Establece la relación
            vehiculo: vehiculo, // Establece la relación
            fechaHoraIngreso: new Date(fechaHoraIngreso), // Asegúrate de que el formato sea correcto
        });

        // Guarda el nuevo parqueo
        await parquearRepository.save(nuevoParquear);
        res.status(201).json(nuevoParquear);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el parqueo', error });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const resultado = await parquearRepository.update(req.params.id, req.body);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Parqueo no encontrado' });
        }
        res.json({ message: 'Parqueo actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el parqueo', error });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const resultado = await parquearRepository.delete(req.params.id);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Parqueo no encontrado' });
        }
        res.json({ message: 'Parqueo eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el parqueo', error });
    }
});

export default router;
