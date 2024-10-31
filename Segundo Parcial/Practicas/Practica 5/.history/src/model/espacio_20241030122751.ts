import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Espacio {
    static findOneBy(arg0: { id: any; }) {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    descripcion!: string;
}