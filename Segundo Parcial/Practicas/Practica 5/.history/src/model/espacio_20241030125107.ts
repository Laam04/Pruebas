// espacio.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parquear } from './parquear';

@Entity()
export class Espacio {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descripcion!: string; 
    
    @OneToMany(() => Parquear, (parquear) => parquear.espacio)
    parqueos!: Parquear[]; // Relación inversa con Parquear
}
