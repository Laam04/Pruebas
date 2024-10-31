import "reflect-metadata";
import { DataSource } from "typeorm";
import { Vehiculo } from "./entity/vehiculo";
import { EspacioParqueo } from "./entity/espacio";
import { Parquear } from "./entity/parking";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "alquiler_vehiculos",
    synchronize: false,
    logging: false,
    entities: [Vehiculo, EspacioParqueo, Parquear],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });
    export {
        AppDataSource
    }


