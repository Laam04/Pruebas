import express from 'express';
import jwt from 'jsonwebtoken';
import { Usuario } from '../model/usuario';

const router = express.Router();
const JWT_SECRET = '123456';

router.post('/registro', async (req, res) => {
  const { nombre, clave } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ nombre });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El nombre de usuario ya existe' });
    }

    const nuevoUsuario = new Usuario({ nombre, clave });
    await nuevoUsuario.save();
    res.status(201).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

router.post('/login', async (req, res) => {
  const { nombre, clave } = req.body;

  try {
    const usuario = await Usuario.findOne({ nombre });
    if (!usuario || !(await usuario.compararClave(clave))) {
      return res.status(400).json({ error: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ id: usuario._id, nombre: usuario.nombre, estado: usuario.estado }, JWT_SECRET, {
      expiresIn: '1h'
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

router.patch('/:id/estado', async (req, res) => {
  const { estado } = req.body; 
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, { estado }, { new: true });
    if (!usuarioActualizado) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el estado del usuario' });
  }
});
export default router;
