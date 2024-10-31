import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UsuarioDTO {
    @IsString({ message: 'El nombre es obligatorio' })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    nombre!: string;

    @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
    @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
    email!: string;

    @IsString({ message: 'La contraseña es obligatoria' })
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    contraseña!: string;

    @IsString({ message: 'El estado del usuario es obligatorio' })
    @IsNotEmpty({ message: 'El estado del usuario es obligatorio' })
    estado!: string; // Por ejemplo, "Activo", "Inactivo"
}
