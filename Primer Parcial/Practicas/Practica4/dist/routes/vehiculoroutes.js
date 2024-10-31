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
const vehiculo_1 = require("../model/vehiculo");
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehiculo = yield vehiculo_1.Vehiculo.find();
    res.json(vehiculo);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehiculo = yield vehiculo_1.Vehiculo.findById(req.params.id);
    res.json(vehiculo);
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoVehiculo = new vehiculo_1.Vehiculo(req.body);
    yield nuevoVehiculo.save();
    res.json(nuevoVehiculo);
}));
router.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehiculoActualizado = yield vehiculo_1.Vehiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(vehiculoActualizado);
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield vehiculo_1.Vehiculo.findByIdAndDelete(req.params.id);
    res.json({ message: "Vehículo eliminado" });
}));
exports.default = router;
