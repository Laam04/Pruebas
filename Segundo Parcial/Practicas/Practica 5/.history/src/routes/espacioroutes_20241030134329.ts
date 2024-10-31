import { Router } from 'express';
import { espacioRepository } from '../repository/espacioRepository';
import { EspacioDTO } from '../dto/espacio.dto';

const router = Router();

// Obtener todos los espacios
router.get('/', async (req, res) => {
    try {
        const espacios = await espacioRepository.find();
        res.json(espacios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los espacios', error });
    }
});

// Obtener un espacio por ID
router.get('/:id', async (req, res) => {
    try {
        const espacio = await espacioRepository.findOne({ where: { id: Number(req.params.id) } });
        if (!espacio) {
            return res.status(404).json({ message: 'Espacio no encontrado' });
        }
        res.json(espacio);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el espacio', error });
    }
});

// Crear un nuevo espacio
router.post('/', async (req, res) => {
    try {
        const nuevoEspacio = espacioRepository.create(req.body);
        await espacioRepository.save(nuevoEspacio);
        res.status(201).json(nuevoEspacio);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el espacio', error });
    }
});

// Actualizar un espacio por ID
router.put('/:id', async (req, res) => {
    try {
        const resultado = await espacioRepository.update(req.params.id, req.body);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Espacio no encontrado' });
        }
        res.json({ message: 'Espacio actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el espacio', error });
    }
});

// Eliminar un espacio por ID
router.delete('/:id', async (req, res) => {
    try {
        const resultado = await espacioRepository.delete(req.params.id);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Espacio no encontrado' });
        }
        res.json({ message: 'Espacio eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el espacio', error });
    }
});

export default router;
