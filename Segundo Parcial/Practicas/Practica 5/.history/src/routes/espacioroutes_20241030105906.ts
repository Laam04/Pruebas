import express from "express";
import {Espacio} from "../model/espacio";

const router = express.Router();

router.get("/", async (req, res) => {
  const espacios = await Espacio.find();
  res.json(espacios);
});

router.get("/:id", async (req, res) => {
  const espacio = await Espacio.findById(req.params.id);
  res.json(espacio);
});

router.post("/", async (req, res) => {
  const nuevoEspacio = new Espacio(req.body);
  await nuevoEspacio.save();
  res.json(nuevoEspacio);
});

router.patch("/:id", async (req, res) => {
  const espacioActualizado = await Espacio.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(espacioActualizado);
});

router.delete("/:id", async (req, res) => {
  await Espacio.findByIdAndDelete(req.params.id);
  res.json({ message: "Espacio de parqueo eliminado" });
});

export default router;
