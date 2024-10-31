import { AppDataSource } from "./index";
import { Vehiculo } from "./entity/vehiculo";

const testCreateVehiculo = async () => {
    const vehiculoRepository = AppDataSource.getRepository(Vehiculo);
    const nuevoVehiculo = new Vehiculo();
    nuevoVehiculo.descripcion = "Sedán";
    nuevoVehiculo.placa = "ABC123";
    nuevoVehiculo.color = "Rojo";

    await vehiculoRepository.save(nuevoVehiculo);
    
    const vehiculos = await vehiculoRepository.find();
    console.log("Vehículos:", vehiculos);
};

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized!");
        return testCreateVehiculo();
    })
    .catch((err) => {
        console.error("Error during initialization:", err);
    });
