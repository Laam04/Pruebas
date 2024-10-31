import { Router } from 'express';
import { EspacioController } from '../controllers/espacioController';

const router = Router();
const espacioController = new EspacioController();

router.post('/', (req, res) => espacioController.crearEspacio(req, res));
router.get('/', (req, res) => espacioController.obtenerEspacios(req, res));
router.get('/:id', (req, res) => espacioController.obtenerEspacioPorId(req, res));
router.put('/:id', (req, res) => espacioController.actualizarEspacio(req, res));
router.delete('/:id', (req, res) => espacioController.eliminarEspacio(req, res));

export default router;
