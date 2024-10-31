"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parquear = void 0;
const typeorm_1 = require("typeorm");
const vehiculo_1 = require("./vehiculo");
const espacio_1 = require("./espacio");
let Parquear = class Parquear {
};
exports.Parquear = Parquear;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Parquear.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vehiculo_1.Vehiculo),
    __metadata("design:type", vehiculo_1.Vehiculo)
], Parquear.prototype, "vehiculo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => espacio_1.EspacioParqueo),
    __metadata("design:type", espacio_1.EspacioParqueo)
], Parquear.prototype, "espacioParqueo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Parquear.prototype, "fechaHoraEntrada", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Parquear.prototype, "fechaHoraSalida", void 0);
exports.Parquear = Parquear = __decorate([
    (0, typeorm_1.Entity)()
], Parquear);
