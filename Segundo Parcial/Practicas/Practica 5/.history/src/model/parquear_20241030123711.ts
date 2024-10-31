// model/parquear.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Espacio } from './espacio';
import { Vehiculo } from './vehiculo';

@Entity()
export class Parquear {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Espacio, espacio => espacio.id) // Asegúrate de que la relación sea correcta
    espacio!: Espacio;

    @ManyToOne(() => Vehiculo, vehiculo => vehiculo.id) // Asegúrate de que la relación sea correcta
    vehiculo!: Vehiculo;

    @Column()
    fechaIngreso!: Date;

    @Column({ nullable: true })
    fechaSalida?: Date;
}
