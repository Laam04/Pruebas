import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Vehiculo } from './vehiculo';
import { EspacioParqueo } from './espacio';

@Entity()
export class Parquear {
    @PrimaryGeneratedColumn()
    id!: number; 

    @ManyToOne(() => Vehiculo, (vehiculo) => vehiculo.id)
    vehiculo!: Vehiculo;

    @ManyToOne(() => EspacioParqueo, (espacio) => espacio.id)
    espacio!: EspacioParqueo;

    @Column()
    fechaHoraEntrada!: Date;

    @Column({ nullable: true })
    fechaHoraSalida?: Date; 
}
