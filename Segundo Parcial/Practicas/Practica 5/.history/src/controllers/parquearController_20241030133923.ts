import { Request, Response } from 'express';
import { Parquear } from '../model/parquear';
import { parquearRepository } from '../repository/parquearRepository';
import { Usuario } from '../model/usuario';
import { Vehiculo } from '../model/vehiculo';
import { Espacio } from '../model/espacio';

export class ParquearController {
    async crearParqueo(req: Request, res: Response) {
        const { vehiculoId, espacioId, fechaHoraEntrada, fechaHoraSalida } = req.body;

        const vehiculo = await Vehiculo.findOneBy({ id: vehiculoId });
        const espacio = await Espacio.findOneBy({ id: espacioId });

        if (!espacio || !vehiculo) {
            return res.status(400).json({ message: 'Espacio o vehículo no encontrado' });
        }

        const nuevoParqueo = parquearRepository.create({
            vehiculoId,
            espacioId,
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
