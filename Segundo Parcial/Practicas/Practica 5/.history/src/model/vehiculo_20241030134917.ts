import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parquear } from './parquear';
@Entity()
export class Vehiculo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    descripcion!: string;

    @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
    placa!: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    color!: string;

    @OneToMany(() => Parquear, parquear => parquear.vehiculo)
    parqueos!: Parquear[];
}
