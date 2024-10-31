import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Vehiculo, IVehiculo } from './model/vehiculo';

// Conexión MongoDB
mongoose.connect('mongodb://localhost:27017/alquilerVehiculos',)
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión:', err));
const app = express();
app.use(express.json());


// Consulta general GET
app.get('/vehiculos', async (req: Request, res: Response) => {
  try {
    const vehiculos = await Vehiculo.find();
    return res.json(vehiculos);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los vehículos' });
  }
});

// Consulta individual GET
app.get('/vehiculos/:id', async (req: Request, res: Response) => {
  try {
    const vehiculo = await Vehiculo.findById(req.params.id);
    if (!vehiculo) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }
    res.json(vehiculo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el vehículo' });
  }
});

// Insertar POST
app.post('/vehiculos', async (req: Request, res: Response) => {
  try {
    const nuevoVehiculo = new Vehiculo(req.body);
    const vehiculoGuardado = await nuevoVehiculo.save();
    res.status(201).json(vehiculoGuardado);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el vehículo' });
  }
});

// Modificar PATCH
app.patch('/vehiculos/:id', async (req: Request, res: Response) => {
  try {
    const vehiculoActualizado = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!vehiculoActualizado) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }
    res.json(vehiculoActualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el vehículo' });
  }
});

// Eliminar DELETE
app.delete('/vehiculos/:id', async (req: Request, res: Response) => {
  try {
    const vehiculoEliminado = await Vehiculo.findByIdAndDelete(req.params.id);
    if (!vehiculoEliminado) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }
    res.json({ message: 'Vehículo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el vehículo' });
  }
});

//Aranque del server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
