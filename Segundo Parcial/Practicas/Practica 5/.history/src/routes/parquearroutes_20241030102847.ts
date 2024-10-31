import { Router } from 'express';
import { parquearRepository } from '../repository/parquearRepository';
import { ParquearDTO } from '../dto/parquear.dto';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const parqueos = await parquearRepository.find({ relations: ['vehiculo', 'espacio'] });
        res.json(parqueos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los parqueos' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { vehiculoId, espacioId, fechaHoraEntrada, fechaHoraSalida }: ParquearDTO = req.body;
        const nuevoParqueo = parquearRepository.create({
            vehiculo: { id: vehiculoId },
            espacio: { id: espacioId },
            fechaHoraEntrada,
            fechaHoraSalida,
        });

        await parquearRepository.save(nuevoParqueo);
        res.status(201).json(nuevoParqueo);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el parqueo', error });
    }
});

export default router;
