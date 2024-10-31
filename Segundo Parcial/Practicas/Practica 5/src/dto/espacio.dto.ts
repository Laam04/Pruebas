import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class EspacioDTO {
    @IsInt({ message: 'El ID del espacio debe ser un número entero' })
    @IsNotEmpty({ message: 'El ID del espacio es obligatorio' })
    id!: number;

    @IsString({ message: 'La descripción del espacio es obligatoria' })
    @IsNotEmpty({ message: 'La descripción del espacio es obligatoria' })
    descripcion!: string;
}
