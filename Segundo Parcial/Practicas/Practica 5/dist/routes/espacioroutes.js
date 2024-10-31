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
const espacio_1 = __importDefault(require("../model/espacio"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const espacios = yield espacio_1.default.find();
    res.json(espacios);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const espacio = yield espacio_1.default.findById(req.params.id);
    res.json(espacio);
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoEspacio = new espacio_1.default(req.body);
    yield nuevoEspacio.save();
    res.json(nuevoEspacio);
}));
router.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const espacioActualizado = yield espacio_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(espacioActualizado);
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield espacio_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: "Espacio de parqueo eliminado" });
}));
exports.default = router;
