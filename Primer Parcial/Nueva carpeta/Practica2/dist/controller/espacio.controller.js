"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerEspaciosParqueo = exports.crearEspacioParqueo = void 0;
const index_1 = require("../index");
const espacio_1 = require("../entity/espacio");
const espacioParqueoRepository = index_1.AppDataSource.getRepository(espacio_1.EspacioParqueo);
const crearEspacioParqueo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoEspacioParqueo = espacioParqueoRepository.create(data);
    return yield espacioParqueoRepository.save(nuevoEspacioParqueo);
});
exports.crearEspacioParqueo = crearEspacioParqueo;
const obtenerEspaciosParqueo = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield espacioParqueoRepository.find();
});
exports.obtenerEspaciosParqueo = obtenerEspaciosParqueo;
