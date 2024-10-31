import { Router } from 'express';
import { parquearRepository } from '../repository/parquearRepository'; 
import { Parquear } from '../model/parquear';

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
    const parquearDTO = new ParquearDTO();
    parquearDTO.vehiculoId = req.body.vehiculoId;
    parquearDTO.espacioId = req.body.espacioId;
    parquearDTO.fechaHoraEntrada = req.body.fechaHoraEntrada;
    parquearDTO.fechaHoraSalida = req.body.fechaHoraSalida;

    // Validar el DTO
    const errors = await validate(parquearDTO);
    if (errors.length > 0) {
        return res.status(400).json(errors);
    }

    // Lógica para crear un nuevo parqueo
    try {
        const nuevoParqueo = parquearRepository.create(parquearDTO);
        await parquearRepository.save(nuevoParqueo);
        return res.status(201).json(nuevoParqueo);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el parqueo', error });
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
