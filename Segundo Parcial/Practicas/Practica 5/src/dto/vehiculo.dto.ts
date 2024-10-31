import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class VehiculoDTO {
    @IsInt({ message: 'El ID del vehículo debe ser un número entero' })
    @IsNotEmpty({ message: 'El ID del vehículo es obligatorio' })
    id!: number;

    @IsString({ message: 'La marca del vehículo es obligatoria' })
    @IsNotEmpty({ message: 'La marca del vehículo es obligatoria' })
    marca!: string;

    @IsString({ message: 'El modelo del vehículo es obligatorio' })
    @IsNotEmpty({ message: 'El modelo del vehículo es obligatorio' })
    modelo!: string;

    @IsString({ message: 'El color del vehículo es obligatorio' })
    @IsNotEmpty({ message: 'El color del vehículo es obligatorio' })
    color!: string;

    @IsString({ message: 'La placa del vehículo es obligatoria' })
    @IsNotEmpty({ message: 'La placa del vehículo es obligatoria' })
    placa!: string;
}
