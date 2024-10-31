import { AppDataSource } from '../ormconfig';
import { Parquear } from '../model/parquear';

export const parquearRepository = AppDataSource.getRepository(Parquear);
