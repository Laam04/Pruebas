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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const vehiculo_1 = require("./model/vehiculo");
// Conexión MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/alquilerVehiculos')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión:', err));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Consulta general GET
app.get('/vehiculos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehiculos = yield vehiculo_1.Vehiculo.find();
        return res.json(vehiculos);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error al obtener los vehículos' });
    }
}));
// Consulta individual GET
app.get('/vehiculos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehiculo = yield vehiculo_1.Vehiculo.findById(req.params.id);
        if (!vehiculo) {
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        }
        res.json(vehiculo);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el vehículo' });
    }
}));
// Insertar POST
app.post('/vehiculos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoVehiculo = new vehiculo_1.Vehiculo(req.body);
        const vehiculoGuardado = yield nuevoVehiculo.save();
        res.status(201).json(vehiculoGuardado);
    }
    catch (error) {
        res.status(400).json({ error: 'Error al crear el vehículo' });
    }
}));
// Modificar PATCH
app.patch('/vehiculos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehiculoActualizado = yield vehiculo_1.Vehiculo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!vehiculoActualizado) {
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        }
        res.json(vehiculoActualizado);
    }
    catch (error) {
        res.status(400).json({ error: 'Error al actualizar el vehículo' });
    }
}));
// Eliminar DELETE
app.delete('/vehiculos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehiculoEliminado = yield vehiculo_1.Vehiculo.findByIdAndDelete(req.params.id);
        if (!vehiculoEliminado) {
            return res.status(404).json({ error: 'Vehículo no encontrado' });
        }
        res.json({ message: 'Vehículo eliminado correctamente' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el vehículo' });
    }
}));
//Aranque del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
