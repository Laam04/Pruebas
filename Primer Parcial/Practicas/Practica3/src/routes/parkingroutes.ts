import express from "express";
import Parquear from "../model/parking";

const router = express.Router();

router.get("/", async (req, res) => {
  const parqueos = await Parquear.find().populate("vehiculoId").populate("parqueoId");
  res.json(parqueos);
});

router.get("/:id", async (req, res) => {
  const parqueo = await Parquear.findById(req.params.id).populate("vehiculoId").populate("parqueoId");
  res.json(parqueo);
});

router.post("/", async (req, res) => {
  const nuevoParqueo = new Parquear(req.body);
  await nuevoParqueo.save();
  res.json(nuevoParqueo);
});

router.patch("/:id", async (req, res) => {
  const parqueoActualizado = await Parquear.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(parqueoActualizado);
});

router.delete("/:id", async (req, res) => {
  await Parquear.findByIdAndDelete(req.params.id);
  res.json({ message: "Parqueo eliminado" });
});

export default router;
