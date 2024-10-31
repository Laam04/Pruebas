
import { AppDataSource } from '../ormconfig';
import { Usuario } from '../model/usuario';

export const usuarioRepository = AppDataSource.getRepository(Usuario);
