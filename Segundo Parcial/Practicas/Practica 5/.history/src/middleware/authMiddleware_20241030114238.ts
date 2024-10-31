import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Usuario } from '../model/usuario';
import { usuarioRepository } from '../repository/usuarioRepository';

const JWT_SECRET = '12345';

export const verificarToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string; estado: string };
        const usuario = await usuarioRepository.findOneBy({ id: Number(decoded.id) });

        if (!usuario || usuario.estado !== 'Activo') {
            return res.status(403).json({ error: 'Token rechazado o usuario inactivo' });
        }

        req.body.usuario = usuario;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Token inválido' });
    }
};
