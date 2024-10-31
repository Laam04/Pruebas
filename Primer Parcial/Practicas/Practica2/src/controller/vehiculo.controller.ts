import { AppDataSource } from "../index";
import { Vehiculo } from "../entity/vehiculo";

const vehiculoRepository = AppDataSource.getRepository(Vehiculo);

const crearVehiculo = async (data: Partial<Vehiculo>) => {
    const nuevoVehiculo = vehiculoRepository.create(data);
    return await vehiculoRepository.save(nuevoVehiculo);
};

const obtenerVehiculos = async () => {
    return await vehiculoRepository.find();
};
export{
    crearVehiculo,
    obtenerVehiculos
}
