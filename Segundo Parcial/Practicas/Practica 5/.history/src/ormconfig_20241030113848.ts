import { DataSource } from 'typeorm';
import { Parquear } from './model/parquear';
import { Vehiculo } from './model/vehiculo';
import { Espacio } from './model/espacio';
import { Usuario } from './model/usuario';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './database.sqlite',
    synchronize: true,
    entities: [Usuario, Parquear, Vehiculo, Espacio],
    logging: true,
});
