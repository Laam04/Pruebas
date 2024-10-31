import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Vehiculo } from './vehiculo';
import { Espacio } from './espacio';

@Entity()
export class Parquear {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Vehiculo, vehiculo => vehiculo.parqueos)
    vehiculo!: Vehiculo;

    @ManyToOne(() => Espacio, espacio => espacio.parqueos)
    espacio!: Espacio;

    @Column({ type: 'timestamp' })
    fechaHoraEntrada!: Date;

    @Column({ type: 'timestamp', nullable: true })
    fechaHoraSalida?: Date;
}
