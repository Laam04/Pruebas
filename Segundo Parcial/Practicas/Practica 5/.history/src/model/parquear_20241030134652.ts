import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Vehiculo } from './vehiculo'; // Asegúrate de que la ruta sea correcta
import { Espacio } from './espacio'; // Asegúrate de que la ruta sea correcta

@Entity()
export class Parquear {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    fechaHoraEntrada!: Date;

    @Column({ nullable: true })
    fechaHoraSalida?: Date;

    @ManyToOne(() => Vehiculo, vehiculo => vehiculo.parqueos)
    vehiculo!: Vehiculo;

    @ManyToOne(() => Espacio, espacio => espacio.parqueos)
    espacio!: Espacio;
}
