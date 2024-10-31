"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const vehiculo_1 = require("./entity/vehiculo");
const espacio_1 = require("./entity/espacio");
const parking_1 = require("./entity/parking");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "alquiler_vehiculos",
    synchronize: false,
    logging: false,
    entities: [vehiculo_1.Vehiculo, espacio_1.EspacioParqueo, parking_1.Parquear],
    migrations: [],
    subscribers: [],
});
exports.AppDataSource = AppDataSource;
AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
