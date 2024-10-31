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
const parking_1 = __importDefault(require("../model/parking"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parqueos = yield parking_1.default.find().populate("vehiculoId").populate("parqueoId");
    res.json(parqueos);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parqueo = yield parking_1.default.findById(req.params.id).populate("vehiculoId").populate("parqueoId");
    res.json(parqueo);
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoParqueo = new parking_1.default(req.body);
    yield nuevoParqueo.save();
    res.json(nuevoParqueo);
}));
router.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parqueoActualizado = yield parking_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(parqueoActualizado);
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield parking_1.default.findByIdAndDelete(req.params.id);
    res.json({ message: "Parqueo eliminado" });
}));
exports.default = router;
