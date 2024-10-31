import { Request, Response } from 'express';
import { Espacio } from '../model/espacio';
import { espacioRepository } from '../repository/espacioRepository';

export class EspacioController {
    async crearEspacio(req: Request, res: Response) {
        const nuevoEspacio = espacioRepository.create(req.body);
        await espacioRepository.save(nuevoEspacio);
        res.status(201).json(nuevoEspacio);
    }

    async obtenerEspacios(req: Request, res: Response) {
        const espacios = await espacioRepository.find();
        res.json(espacios);
    }

    async obtenerEspacioPorId(req: Request, res: Response) {
        const espacio = await espacioRepository.findOneBy({ id: Number(req.params.id) });
        if (!espacio) {
            return res.status(404).json({ message: 'Espacio no encontrado' });
        }
        res.json(espacio);
    }

    async actualizarEspacio(req: Request, res: Response) {
        const resultado = await espacioRepository.update(req.params.id, req.body);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Espacio no encontrado' });
        }
        res.json({ message: 'Espacio actualizado' });
    }

    async eliminarEspacio(req: Request, res: Response) {
        const resultado = await espacioRepository.delete(req.params.id);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Espacio no encontrado' });
        }
        res.json({ message: 'Espacio eliminado' });
    }
}
