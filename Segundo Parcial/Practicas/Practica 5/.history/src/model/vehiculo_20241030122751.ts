import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehiculo {
    static findOneBy(arg0: { id: any; }) {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    descripcion!: string;

    @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
    placa!: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    color!: string;
}
