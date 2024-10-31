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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var vehiculoService_1 = require("../services/vehiculoService");
var espacioService_1 = require("../services/espacioService");
var parkingService_1 = require("../services/parkingService");
// Datos de ejemplo para vehículos, espacios y parking
var datos = {
    vehiculos: [
        { descripcion: 'Sedan', placa: 'ABC123', color: 'Rojo' },
        { descripcion: 'SUV', placa: 'DEF456', color: 'Azul' },
        { descripcion: 'Coupé', placa: 'GHI789', color: 'Verde' },
        { descripcion: 'Hatchback', placa: 'JKL012', color: 'Negro' },
        { descripcion: 'Camioneta', placa: 'MNO345', color: 'Blanco' },
        { descripcion: 'Convertible', placa: 'PQR678', color: 'Amarillo' },
        { descripcion: 'Familiar', placa: 'STU901', color: 'Gris' },
        { descripcion: 'Deportivo', placa: 'VWX234', color: 'Naranja' },
        { descripcion: 'SUV Compacto', placa: 'YZA567', color: 'Morado' },
        { descripcion: 'Monovolumen', placa: 'BCD890', color: 'Celeste' }
    ],
    espacios: [
        { descripcion: 'Espacio 1' },
        { descripcion: 'Espacio 2' },
        { descripcion: 'Espacio 3' },
        { descripcion: 'Espacio 4' },
        { descripcion: 'Espacio 5' },
        { descripcion: 'Espacio 6' },
        { descripcion: 'Espacio 7' },
        { descripcion: 'Espacio 8' },
        { descripcion: 'Espacio 9' },
        { descripcion: 'Espacio 10' }
    ],
    parking: [
        { idVehiculo: 'ABC123', idParqueo: 'Espacio 1', fechaEntrada: new Date('2024-10-01T08:00:00Z'), fechaSalida: new Date('2024-10-01T10:00:00Z') },
        { idVehiculo: 'DEF456', idParqueo: 'Espacio 2', fechaEntrada: new Date('2024-10-02T09:00:00Z'), fechaSalida: new Date('2024-10-02T12:00:00Z') },
        { idVehiculo: 'GHI789', idParqueo: 'Espacio 3', fechaEntrada: new Date('2024-10-03T10:00:00Z'), fechaSalida: new Date('2024-10-03T11:00:00Z') },
        { idVehiculo: 'JKL012', idParqueo: 'Espacio 4', fechaEntrada: new Date('2024-10-04T11:30:00Z'), fechaSalida: new Date('2024-10-04T13:00:00Z') },
        { idVehiculo: 'MNO345', idParqueo: 'Espacio 5', fechaEntrada: new Date('2024-10-05T14:00:00Z'), fechaSalida: new Date('2024-10-05T15:00:00Z') },
        { idVehiculo: 'PQR678', idParqueo: 'Espacio 6', fechaEntrada: new Date('2024-10-06T16:00:00Z'), fechaSalida: new Date('2024-10-06T17:30:00Z') },
        { idVehiculo: 'STU901', idParqueo: 'Espacio 7', fechaEntrada: new Date('2024-10-07T08:30:00Z'), fechaSalida: new Date('2024-10-07T10:30:00Z') },
        { idVehiculo: 'VWX234', idParqueo: 'Espacio 8', fechaEntrada: new Date('2024-10-08T09:00:00Z'), fechaSalida: new Date('2024-10-08T11:00:00Z') },
        { idVehiculo: 'YZA567', idParqueo: 'Espacio 9', fechaEntrada: new Date('2024-10-09T10:00:00Z'), fechaSalida: new Date('2024-10-09T11:30:00Z') },
        { idVehiculo: 'BCD890', idParqueo: 'Espacio 10', fechaEntrada: new Date('2024-10-10T12:00:00Z'), fechaSalida: new Date('2024-10-10T14:00:00Z') }
    ]
};
// Migración
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, _a, vehiculo, _b, _c, espacio, _d, _e, registro, error_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 13, , 14]);
                _i = 0, _a = datos.vehiculos;
                _f.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                vehiculo = _a[_i];
                return [4 /*yield*/, (0, vehiculoService_1.crearVehiculo)(vehiculo)];
            case 2:
                _f.sent();
                _f.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                console.log('Vehículos migrados con éxito.');
                _b = 0, _c = datos.espacios;
                _f.label = 5;
            case 5:
                if (!(_b < _c.length)) return [3 /*break*/, 8];
                espacio = _c[_b];
                return [4 /*yield*/, (0, espacioService_1.crearEspacio)(espacio)];
            case 6:
                _f.sent();
                _f.label = 7;
            case 7:
                _b++;
                return [3 /*break*/, 5];
            case 8:
                console.log('Espacios migrados con éxito.');
                _d = 0, _e = datos.parking;
                _f.label = 9;
            case 9:
                if (!(_d < _e.length)) return [3 /*break*/, 12];
                registro = _e[_d];
                return [4 /*yield*/, (0, parkingService_1.crearParking)(registro)];
            case 10:
                _f.sent();
                _f.label = 11;
            case 11:
                _d++;
                return [3 /*break*/, 9];
            case 12:
                console.log('Registros de parking migrados con éxito.');
                return [3 /*break*/, 14];
            case 13:
                error_1 = _f.sent();
                console.error('Error durante la migración:', error_1);
                return [3 /*break*/, 14];
            case 14: return [2 /*return*/];
        }
    });
}); })();
