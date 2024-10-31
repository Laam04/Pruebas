// espacio.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parquear } from './parquear';

@Entity()
export class Espacio {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column()
    estado!: string; // Activo, Inactivo, etc.

    @OneToMany(() => Parquear, (parquear) => parquear.espacio)
    parqueos!: Parquear[]; // Relación inversa con Parquear
}
