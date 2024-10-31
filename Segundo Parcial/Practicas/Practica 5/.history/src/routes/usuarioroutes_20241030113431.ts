// src/routes/usuarioRoutes.ts
import { Router } from 'express';
import { usuarioRepository } from '../repository/usuarioRepository';
import { Usuario } from '../model/usuario';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();
const JWT_SECRET = '12345'; // Cambia esto en producción y almacénalo en un lugar seguro

// Registro de usuario
router.post('/register', async (req, res) => {
    try {
        const { nombre, email, contraseña } = req.body;

        // Encriptar la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(contraseña, 10);

        const nuevoUsuario = usuarioRepository.create({
            nombre,
            email,
            clave: hashedPassword,
            estado: 'Activo',
        });

        await usuarioRepository.save(nuevoUsuario);
        res.status(201).json({ message: 'Usuario registrado', id: nuevoUsuario.id });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    try {
        const { email, contraseña } = req.body;
        const usuario = await usuarioRepository.findOneBy({ email });

        // Verificar las credenciales
        if (!usuario || !(await bcrypt.compare(contraseña, usuario.clave))) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Generar el token
        const token = jwt.sign({ id: usuario.id, estado: usuario.estado }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
});

export default router;
