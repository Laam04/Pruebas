import { AppDataSource } from "../index";
import { Parquear } from "../entity/parking";

const parquearRepository = AppDataSource.getRepository(Parquear);

const crearParquear = async (data: Partial<Parquear>) => {
    const nuevoParquear = parquearRepository.create(data);
    return await parquearRepository.save(nuevoParquear);
};

const obtenerParqueos = async () => {
    return await parquearRepository.find({
        relations: ["vehiculo", "espacioParqueo"],
    });
};
export{
    crearParquear,
    obtenerParqueos
}