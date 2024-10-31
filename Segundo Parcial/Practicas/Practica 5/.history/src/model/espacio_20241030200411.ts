import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Parquear } from './parquear';

@Entity()
export class Espacio {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    descripcion!: string;

    @OneToMany(() => Parquear, parquear => parquear.espacio)
    parqueos!: Parquear[];
}
