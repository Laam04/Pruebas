import { Router } from 'express';
import { VehiculoController } from '../controllers/vehiculoController';

const router = Router();
const vehiculoController = new VehiculoController();

router.post('/', (req, res) => vehiculoController.crearVehiculo(req, res));
router.get('/', (req, res) => vehiculoController.obtenerVehiculos(req, res));
router.get('/:id', (req, res) => vehiculoController.obtenerVehiculoPorId(req, res));
router.put('/:id', (req, res) => vehiculoController.actualizarVehiculo(req, res));
router.delete('/:id', (req, res) => vehiculoController.eliminarVehiculo(req, res));

export default router;
