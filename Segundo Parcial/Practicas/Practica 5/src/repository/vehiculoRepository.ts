import { AppDataSource } from '../ormconfig';
import { Vehiculo } from '../model/vehiculo';

export const vehiculoRepository = AppDataSource.getRepository(Vehiculo);
