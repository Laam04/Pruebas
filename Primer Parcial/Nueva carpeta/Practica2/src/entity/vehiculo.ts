import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Vehiculo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descripcion!: string;

    @Column()
    placa!: string;

    @Column()
    color!: string;
}
export{
    Vehiculo
}
