// model/parquear.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Parquear {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    vehiculoId!: number;

    @Column()
    espacioId!: number;

    @Column({ type: 'datetime' }) // O también podrías usar 'text'
    fechaHoraEntrada!: Date;

    @Column({ type: 'datetime', nullable: true }) // Esto permite que sea opcional
    fechaHoraSalida?: Date;
}
