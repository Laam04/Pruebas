import { Request, Response } from 'express';
import { Vehiculo } from '../model/vehiculo';
import { vehiculoRepository } from '../repository/vehiculoRepository';

export class VehiculoController {
    async crearVehiculo(req: Request, res: Response) {
        const nuevoVehiculo = vehiculoRepository.create(req.body);
        await vehiculoRepository.save(nuevoVehiculo);
        res.status(201).json(nuevoVehiculo);
    }

    async obtenerVehiculos(req: Request, res: Response) {
        const vehiculos = await vehiculoRepository.find();
        res.json(vehiculos);
    }

    async obtenerVehiculoPorId(req: Request, res: Response) {
        const vehiculo = await vehiculoRepository.findOneBy({ id: Number(req.params.id) });
        if (!vehiculo) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }
        res.json(vehiculo);
    }

    async actualizarVehiculo(req: Request, res: Response) {
        const resultado = await vehiculoRepository.update(req.params.id, req.body);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }
        res.json({ message: 'Vehículo actualizado' });
    }

    async eliminarVehiculo(req: Request, res: Response) {
        const resultado = await vehiculoRepository.delete(req.params.id);
        if (resultado.affected === 0) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }
        res.json({ message: 'Vehículo eliminado' });
    }
}
