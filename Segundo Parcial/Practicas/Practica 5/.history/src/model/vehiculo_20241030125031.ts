// vehiculo.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parquear } from './parquear';

@Entity()
export class Vehiculo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descripcion!: string;

    @Column()
    color!: string;

    @Column()
    placa!: string;

    @OneToMany(() => Parquear, (parquear) => parquear.vehiculo)
    parqueos!: Parquear[]; // Relación inversa con Parquear
}
