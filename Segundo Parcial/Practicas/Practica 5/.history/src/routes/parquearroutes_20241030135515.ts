import { Router } from 'express';
import { parquearRepository } from '../repository/parquearRepository'; 
import { vehiculoRepository } from '../repository/vehiculoRepository';
import { espacioRepository } from '../repository/espacioRepository';
import { Parquear } from '../model/parquear';
import { ParquearDTO } from '../dto/parquear.dto'; // Asegúrate de que este DTO esté correctamente importado

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
        const { vehiculoId, espacioId, fechaHoraEntrada, fechaHoraSalida } = req.body as ParquearDTO;

        // Primero busca el vehículo y el espacio
        const vehiculo = await vehiculoRepository.findOne({ where: { id: vehiculoId } });
        const espacio = await espacioRepository.findOne({ where: { id: espacioId } });

        // Verifica que ambos existan
        if (!vehiculo || !espacio) {
            return res.status(400).json({ message: 'Vehículo o espacio no encontrado' });
        }

        // Crea una nueva instancia de Parquear
        const nuevoParquear = parquearRepository.create({
            vehiculo,
            espacio,
            fechaHoraEntrada,
            fechaHoraSalida,
        });

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
