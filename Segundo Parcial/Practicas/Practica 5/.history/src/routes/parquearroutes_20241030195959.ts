import { Router } from 'express';
import { ParquearController } from '../controllers/parquearController';

const router = Router();
const parquearController = new ParquearController();

router.post('/', (req, res) => parquearController.crearParqueo(req, res));
router.get('/', (req, res) => parquearController.obtenerParqueos(req, res));
router.get('/:id', (req, res) => parquearController.obtenerParqueoPorId(req, res));
router.put('/:id', (req, res) => parquearController.actualizarParqueo(req, res));
router.delete('/:id', (req, res) => parquearController.eliminarParqueo(req, res));

export default router;
