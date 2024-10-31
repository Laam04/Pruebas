import { AppDataSource } from '../ormconfig';
import { Espacio } from '../model/espacio';

export const parquearRepository = AppDataSource.getRepository(Espacio);
