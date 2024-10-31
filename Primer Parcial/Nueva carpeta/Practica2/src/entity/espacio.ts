import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
 class EspacioParqueo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descripcion!: string;
}
export{
    EspacioParqueo
}
