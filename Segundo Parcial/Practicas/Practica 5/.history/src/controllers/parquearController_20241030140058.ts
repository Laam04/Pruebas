// controllers/parquearController.ts

import { Request, Response } from 'express';
import { parquearRepository } from '../repository/parquearRepository';
import { vehiculoRepository } from '../repository/vehiculoRepository'; // Asegúrate de tener este repositorio
import { espacioRepository } from '../repository/espacioRepository'; // Asegúrate de tener este repositorio
import { Parquear } from '../model/parquear'; // Asegúrate de importar la entidad Parquear

export class ParquearController {
    async crearParqueo(req: Request, res: Response) {
        const { vehiculoId, espacioId, fechaHoraEntrada, fechaHoraSalida } = req.body;

        // Usa el repositorio para buscar el vehículo y el espacio
        const vehiculo = await vehiculoRepository.findOne({ where: { id: vehiculoId } });
        const espacio = await espacioRepository.findOne({ where: { id: espacioId } });

        if (!espacio || !vehiculo) {
            return res.status(400).json({ message: 'Espacio o vehículo no encontrado' });
        }

        // Crea una nueva instancia de Parquear
        const nuevoParqueo = parquearRepository.create({
            vehiculo,
            espacio,
            fechaHoraEntrada,
            fechaHoraSalida,
        });

        await parquearRepository.save(nuevoParqueo);
        return res.status(201).json(nuevoParqueo);
    }

    async obtenerParqueos(req: Request, res: Response) {
        const parqueos = await parquearRepository.find();
        res.json(parqueos);
    }

    async obtenerParqueoPorId(req: Request, res: Response) {
        const parqueo = await parquearRepository.findOneBy({ id: Number(req.params.id) });
        if (!parqueo) {
            return res.status(404).json({ message: 'Parqueo no encontrado' });
        }
        res.json(parqueo);
    }

    async actualizarParqueo(req: Request, res: Response) {
        const resultado = await parquearRepository.update(req.params.id, req.body);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Parqueo no encontrado' });
        }
        res.json({ message: 'Parqueo actualizado' });
    }

    async eliminarParqueo(req: Request, res: Response) {
        const resultado = await parquearRepository.delete(req.params.id);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Parqueo no encontrado' });
        }
        res.json({ message: 'Parqueo eliminado' });
    }
}
