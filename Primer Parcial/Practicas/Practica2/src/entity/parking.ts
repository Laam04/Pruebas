import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Vehiculo } from "./vehiculo";
import { EspacioParqueo } from "./espacio";

@Entity()
class Parquear {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Vehiculo)
    vehiculo!: Vehiculo;

    @ManyToOne(() => EspacioParqueo)
    espacioParqueo!: EspacioParqueo;

    @Column()
    fechaHoraEntrada!: Date;

    @Column()
    fechaHoraSalida!: Date;
}
export{
    Parquear
}