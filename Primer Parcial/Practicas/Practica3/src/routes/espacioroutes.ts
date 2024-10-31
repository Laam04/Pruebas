import express from "express";
import EspacioParqueo from "../model/espacio";

const router = express.Router();

router.get("/", async (req, res) => {
  const espacios = await EspacioParqueo.find();
  res.json(espacios);
});

router.get("/:id", async (req, res) => {
  const espacio = await EspacioParqueo.findById(req.params.id);
  res.json(espacio);
});

router.post("/", async (req, res) => {
  const nuevoEspacio = new EspacioParqueo(req.body);
  await nuevoEspacio.save();
  res.json(nuevoEspacio);
});

router.patch("/:id", async (req, res) => {
  const espacioActualizado = await EspacioParqueo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(espacioActualizado);
});

router.delete("/:id", async (req, res) => {
  await EspacioParqueo.findByIdAndDelete(req.params.id);
  res.json({ message: "Espacio de parqueo eliminado" });
});

export default router;
