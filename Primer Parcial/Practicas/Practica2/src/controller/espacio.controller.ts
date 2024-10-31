import { AppDataSource } from "../index";
import { EspacioParqueo } from "../entity/espacio";

const espacioParqueoRepository = AppDataSource.getRepository(EspacioParqueo);

const crearEspacioParqueo = async (data: Partial<EspacioParqueo>) => {
    const nuevoEspacioParqueo = espacioParqueoRepository.create(data);
    return await espacioParqueoRepository.save(nuevoEspacioParqueo);
};

const obtenerEspaciosParqueo = async () => {
    return await espacioParqueoRepository.find();
};
export{
    crearEspacioParqueo,
    obtenerEspaciosParqueo
}
