import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Espacio {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    descripcion!: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    parqueos!: number;
}
