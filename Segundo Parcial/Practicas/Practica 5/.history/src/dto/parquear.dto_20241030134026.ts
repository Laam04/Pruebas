import { IsNotEmpty, IsInt, IsOptional, IsDate } from 'class-validator';

export class ParquearDTO {
    @IsInt({ message: 'El ID del vehículo debe ser un número entero' })
    @IsNotEmpty({ message: 'El ID del vehículo es obligatorio' })
    vehiculoId!: number;

    @IsInt({ message: 'El ID del espacio de parqueo debe ser un número entero' })
    @IsNotEmpty({ message: 'El ID del espacio de parqueo es obligatorio' })
    espacioId!: number;

    @IsDate({ message: 'La fecha y hora de entrada debe ser una fecha válida' })
    @IsNotEmpty({ message: 'La fecha y hora de entrada es obligatoria' })
    fechaHoraEntrada!: Date;

    @IsOptional()
    @IsDate({ message: 'La fecha y hora de salida debe ser una fecha válida' })
    fechaHoraSalida?: Date;
}
