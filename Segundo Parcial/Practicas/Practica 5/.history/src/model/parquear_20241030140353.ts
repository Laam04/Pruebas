// model/parquear.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Parquear {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    vehiculoId!: number;

    @Column()
    espacioId!: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    fechaHoraEntrada!: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    fechaHoraSalida!: string;
}
