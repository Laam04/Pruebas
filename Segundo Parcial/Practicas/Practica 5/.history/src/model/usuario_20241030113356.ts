// src/model/usuario.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    clave!: string; // Asegúrate de encriptar la contraseña antes de guardarla

    @Column({ default: 'Activo' })
    estado!: string;
}
