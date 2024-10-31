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
var promise_1 = require("mysql2/promise");
function migrateData() {
    return __awaiter(this, void 0, void 0, function () {
        var connection, _i, _a, vehiculo, _b, _c, espacio, _d, _e, transaccion;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, promise_1.default.createConnection({
                        host: 'localhost',
                        user: 'root',
                        password: '',
                        database: 'sistema_parqueo'
                    })];
                case 1:
                    connection = _f.sent();
                    _i = 0, _a = data.vehiculo.datos;
                    _f.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    vehiculo = _a[_i];
                    return [4 /*yield*/, connection.execute('INSERT INTO Vehiculo (ID, Descripcion, Placa, Color) VALUES (?, ?, ?, ?)', [vehiculo.ID, vehiculo.Descripcion, vehiculo.Placa, vehiculo.Color])];
                case 3:
                    _f.sent();
                    _f.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    _b = 0, _c = data.espacioParqueo.datos;
                    _f.label = 6;
                case 6:
                    if (!(_b < _c.length)) return [3 /*break*/, 9];
                    espacio = _c[_b];
                    return [4 /*yield*/, connection.execute('INSERT INTO EspacioParqueo (ID, Descripcion) VALUES (?, ?)', [espacio.ID, espacio.Descripcion])];
                case 7:
                    _f.sent();
                    _f.label = 8;
                case 8:
                    _b++;
                    return [3 /*break*/, 6];
                case 9:
                    _d = 0, _e = data.parquear.datos;
                    _f.label = 10;
                case 10:
                    if (!(_d < _e.length)) return [3 /*break*/, 13];
                    transaccion = _e[_d];
                    return [4 /*yield*/, connection.execute("INSERT INTO Parquear (ID, ID_Vehiculo, ID_Parqueo, FechaHoraEntrada, FechaHoraSalida) \n       VALUES (?, ?, ?, ?, ?)", [
                            transaccion.ID,
                            transaccion.ID_Vehiculo,
                            transaccion.ID_Parqueo,
                            transaccion.FechaHoraEntrada,
                            transaccion.FechaHoraSalida
                        ])];
                case 11:
                    _f.sent();
                    _f.label = 12;
                case 12:
                    _d++;
                    return [3 /*break*/, 10];
                case 13:
                    console.log('Migración completada.');
                    return [4 /*yield*/, connection.end()];
                case 14:
                    _f.sent();
                    return [2 /*return*/];
            }
        });
    });
}
migrateData().catch(console.error);
var data = {
    vehiculo: {
        totalElementos: 10,
        tipo: 'maestro',
        datos: [
            { ID: '001', Descripcion: 'Sedán Familiar', Placa: 'XYZ123', Color: 'Rojo' },
            { ID: '002', Descripcion: 'Camioneta 4x4', Placa: 'ABC456', Color: 'Negro' },
            { ID: '003', Descripcion: 'Auto Deportivo', Placa: 'DEF789', Color: 'Azul' },
            { ID: '004', Descripcion: 'SUV Compacto', Placa: 'GHI101', Color: 'Blanco' },
            { ID: '005', Descripcion: 'Motocicleta', Placa: 'JKL112', Color: 'Verde' },
            { ID: '006', Descripcion: 'Furgoneta', Placa: 'MNO123', Color: 'Gris' },
            { ID: '007', Descripcion: 'Coupé', Placa: 'PQR456', Color: 'Amarillo' },
            { ID: '008', Descripcion: 'Convertible', Placa: 'STU789', Color: 'Naranja' },
            { ID: '009', Descripcion: 'Minivan', Placa: 'VWX012', Color: 'Marrón' },
            { ID: '010', Descripcion: 'Pick-up', Placa: 'YZA345', Color: 'Plateado' }
        ]
    },
    espacioParqueo: {
        totalElementos: 10,
        tipo: 'maestro',
        datos: [
            { ID: 'P001', Descripcion: 'Espacio Techado A1' },
            { ID: 'P002', Descripcion: 'Espacio Descubierto B2' },
            { ID: 'P003', Descripcion: 'Espacio Subterráneo C3' },
            { ID: 'P004', Descripcion: 'Espacio VIP D4' },
            { ID: 'P005', Descripcion: 'Espacio Normal E5' },
            { ID: 'P006', Descripcion: 'Espacio Lateral F6' },
            { ID: 'P007', Descripcion: 'Espacio Frente G7' },
            { ID: 'P008', Descripcion: 'Espacio Trasero H8' },
            { ID: 'P009', Descripcion: 'Espacio Especial I9' },
            { ID: 'P010', Descripcion: 'Espacio Reservado J10' }
        ]
    },
    parquear: {
        totalElementos: 10,
        tipo: 'transaccional',
        datos: [
            { ID: 'T001', ID_Vehiculo: '001', ID_Parqueo: 'P001', FechaHoraEntrada: '2024-10-17 08:00', FechaHoraSalida: '2024-10-17 10:00' },
            { ID: 'T002', ID_Vehiculo: '002', ID_Parqueo: 'P002', FechaHoraEntrada: '2024-10-17 09:00', FechaHoraSalida: '2024-10-17 11:00' },
            { ID: 'T003', ID_Vehiculo: '003', ID_Parqueo: 'P003', FechaHoraEntrada: '2024-10-17 10:00', FechaHoraSalida: '2024-10-17 12:00' },
            { ID: 'T004', ID_Vehiculo: '004', ID_Parqueo: 'P004', FechaHoraEntrada: '2024-10-17 11:00', FechaHoraSalida: '2024-10-17 13:00' },
            { ID: 'T005', ID_Vehiculo: '005', ID_Parqueo: 'P005', FechaHoraEntrada: '2024-10-17 12:00', FechaHoraSalida: '2024-10-17 14:00' },
            { ID: 'T006', ID_Vehiculo: '006', ID_Parqueo: 'P006', FechaHoraEntrada: '2024-10-17 13:00', FechaHoraSalida: '2024-10-17 15:00' },
            { ID: 'T007', ID_Vehiculo: '007', ID_Parqueo: 'P007', FechaHoraEntrada: '2024-10-17 14:00', FechaHoraSalida: '2024-10-17 16:00' },
            { ID: 'T008', ID_Vehiculo: '008', ID_Parqueo: 'P008', FechaHoraEntrada: '2024-10-17 15:00', FechaHoraSalida: '2024-10-17 17:00' },
            { ID: 'T009', ID_Vehiculo: '009', ID_Parqueo: 'P009', FechaHoraEntrada: '2024-10-17 16:00', FechaHoraSalida: '2024-10-17 18:00' },
            { ID: 'T010', ID_Vehiculo: '010', ID_Parqueo: 'P010', FechaHoraEntrada: '2024-10-17 17:00', FechaHoraSalida: '2024-10-17 19:00' }
        ]
    }
};
