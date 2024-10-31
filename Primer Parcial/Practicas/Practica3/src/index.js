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
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var vehiculo_1 = require("./model/vehiculo");
// Conexión MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/alquilerVehiculos')
    .then(function () { return console.log('Conectado a MongoDB'); })
    .catch(function (err) { return console.error('Error de conexión:', err); });
var app = (0, express_1.default)();
app.use(express_1.default.json());
// Consulta general GET
app.get('/vehiculos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var vehiculos, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, vehiculo_1.Vehiculo.find()];
            case 1:
                vehiculos = _a.sent();
                return [2 /*return*/, res.json(vehiculos)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({ error: 'Error al obtener los vehículos' })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Consulta individual GET
app.get('/vehiculos/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var vehiculo, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, vehiculo_1.Vehiculo.findById(req.params.id)];
            case 1:
                vehiculo = _a.sent();
                if (!vehiculo) {
                    return [2 /*return*/, res.status(404).json({ error: 'Vehículo no encontrado' })];
                }
                res.json(vehiculo);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).json({ error: 'Error al obtener el vehículo' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Insertar POST
app.post('/vehiculos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nuevoVehiculo, vehiculoGuardado, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                nuevoVehiculo = new vehiculo_1.Vehiculo(req.body);
                return [4 /*yield*/, nuevoVehiculo.save()];
            case 1:
                vehiculoGuardado = _a.sent();
                res.status(201).json(vehiculoGuardado);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(400).json({ error: 'Error al crear el vehículo' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Modificar PATCH
app.patch('/vehiculos/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var vehiculoActualizado, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, vehiculo_1.Vehiculo.findByIdAndUpdate(req.params.id, req.body, {
                        new: true,
                    })];
            case 1:
                vehiculoActualizado = _a.sent();
                if (!vehiculoActualizado) {
                    return [2 /*return*/, res.status(404).json({ error: 'Vehículo no encontrado' })];
                }
                res.json(vehiculoActualizado);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(400).json({ error: 'Error al actualizar el vehículo' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Eliminar DELETE
app.delete('/vehiculos/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var vehiculoEliminado, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, vehiculo_1.Vehiculo.findByIdAndDelete(req.params.id)];
            case 1:
                vehiculoEliminado = _a.sent();
                if (!vehiculoEliminado) {
                    return [2 /*return*/, res.status(404).json({ error: 'Vehículo no encontrado' })];
                }
                res.json({ message: 'Vehículo eliminado correctamente' });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(500).json({ error: 'Error al eliminar el vehículo' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//Aranque del server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Servidor corriendo en http://localhost:".concat(PORT));
});
