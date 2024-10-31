import { AppDataSource } from '../ormconfig';
import { Espacio } from '../model/espacio';

export const espacioRepository = AppDataSource.getRepository(Espacio);
