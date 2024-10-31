import express from "express";
import {Vehiculo} from "../model/vehiculo";

const router = express.Router();

router.get("/", async (req, res) => {
  const vehiculo = await Vehiculo.find();
  res.json(vehiculo);
});

router.get("/:id", async (req, res) => {
  const vehiculo = await Vehiculo.findById(req.params.id);
  res.json(vehiculo);
});

router.post("/", async (req, res) => {
  const nuevoVehiculo = new Vehiculo(req.body);
  await nuevoVehiculo.save();
  res.json(nuevoVehiculo);
});

router.patch("/:id", async (req, res) => {
  const vehiculoActualizado = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(vehiculoActualizado);
});

router.delete("/:id", async (req, res) => {
  await Vehiculo.findByIdAndDelete(req.params.id);
  res.json({ message: "Vehículo eliminado" });
});

export default router;
