// src/routes/usuarioRoutes.ts
import { Router } from 'express';
import { usuarioRepository } from '../repository/usuarioRepository';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { verificarToken } from '../middleware/authMiddleware'; // Asegúrate de importar el middleware

const router = Router();
const JWT_SECRET = '12345'; // Cambia esto en producción y almacénalo en un lugar seguro

// Registro de usuario
router.post('/register', async (req, res) => {
    try {
        const { nombre, email, clave } = req.body;

        // Encriptar la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(clave, 10);

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
        const { email, clave } = req.body;
        const usuario = await usuarioRepository.findOneBy({ email });

        // Verificar las credenciales
        if (!usuario || !(await bcrypt.compare(clave, usuario.clave))) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Generar el token
        const token = jwt.sign({ id: usuario.id, estado: usuario.estado }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
});

// Rutas protegidas - Ejemplo
router.get('/perfil', verificarToken, async (req, res) => {
    // Aquí puedes acceder a los datos del usuario desde req.body.usuario
    res.json(req.body.usuario);
});

export default router;
