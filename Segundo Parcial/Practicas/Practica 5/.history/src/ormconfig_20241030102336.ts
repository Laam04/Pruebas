import { DataSource } from 'typeorm';
import { Parquear } from './model/parking';
import { Vehiculo } from './model/vehiculo';
import { Espacio } from './model/espacio';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './database.sqlite',
    synchronize: true,
    entities: [Parquear, Vehiculo, Espacio],
    logging: true,
});
