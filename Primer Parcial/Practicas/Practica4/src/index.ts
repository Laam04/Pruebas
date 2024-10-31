import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Vehiculo } from './model/vehiculo';
import { EspacioParqueo} from './model/espacio';
import { Parquear} from './model/parking';

mongoose.connect('mongodb://localhost:27017/alquilerVehiculos')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

const app = express();
app.use(express.json());

const verificarToken = (req: Request, res: Response, next: any) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'Token no proporcionado' });

  jwt.verify(token, 'mi_secreto', (err: any, decoded: any) => {
    if (err) return res.status(401).json({ message: 'Token inválido' });
    req.body.usuario = decoded;
    next();
  });
};

const usuarios: any[] = [];

app.post('/usuarios', async (req: Request, res: Response) => {
  const { nombre, clave, estado } = req.body;
  const hashedPassword = await bcrypt.hash(clave, 10);
  const nuevoUsuario = { id: Date.now(), nombre, clave: hashedPassword, estado };
  usuarios.push(nuevoUsuario);
  res.status(201).json({ message: 'Usuario creado', usuario: nuevoUsuario });
});

app.post('/usuarios/login', async (req: Request, res: Response) => {
  const { nombre, clave } = req.body;
  const usuario = usuarios.find(user => user.nombre === nombre);
  
  if (!usuario || !(await bcrypt.compare(clave, usuario.clave))) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  const token = jwt.sign({ nombre: usuario.nombre }, 'mi_secreto', { expiresIn: '1h' });
  res.json({ token });
});

app.get('/vehiculos', async (req: Request, res: Response) => {
  try {
    const vehiculos = await Vehiculo.find();
    return res.json(vehiculos);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los vehículos' });
  }
});

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

app.post('/vehiculos', async (req: Request, res: Response) => {
  try {
    const nuevoVehiculo = new Vehiculo(req.body);
    const vehiculoGuardado = await nuevoVehiculo.save();
    res.status(201).json(vehiculoGuardado);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el vehículo' });
  }
});

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

app.get('/espacios', async (req: Request, res: Response) => {
  try {
    const espacios = await EspacioParqueo.find();
    return res.json(espacios);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los espacios' });
  }
});

app.get('/espacios/:id', async (req: Request, res: Response) => {
  try {
    const espacio = await EspacioParqueo.findById(req.params.id);
    if (!espacio) {
      return res.status(404).json({ error: 'Espacio no encontrado' });
    }
    res.json(espacio);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el espacio' });
  }
});

app.post('/espacios', async (req: Request, res: Response) => {
  try {
    const nuevoEspacio = new EspacioParqueo(req.body);
    const espacioGuardado = await nuevoEspacio.save();
    res.status(201).json(espacioGuardado);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el espacio' });
  }
});

app.patch('/espacios/:id', async (req: Request, res: Response) => {
  try {
    const espacioActualizado = await EspacioParqueo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!espacioActualizado) {
      return res.status(404).json({ error: 'Espacio no encontrado' });
    }
    res.json(espacioActualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el espacio' });
  }
});

app.delete('/espacios/:id', async (req: Request, res: Response) => {
  try {
    const espacioEliminado = await EspacioParqueo.findByIdAndDelete(req.params.id);
    if (!espacioEliminado) {
      return res.status(404).json({ error: 'Espacio no encontrado' });
    }
    res.json({ message: 'Espacio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el espacio' });
  }
});

app.get('/parkings', async (req: Request, res: Response) => {
  try {
      const parkings = await Parquear.find();
      return res.json(parkings);
  } catch (error) {
      return res.status(500).json({ error: 'Error al obtener los parkings' });
  }
});

app.get('/parkings/placa/:placa', async (req: Request, res: Response) => {
  try {
      const parking = await Parquear.findOne({ placa: req.params.placa });
      if (!parking) {
          return res.status(404).json({ error: 'Parking no encontrado' });
      }
      res.json(parking);
  } catch (error) {
      res.status(500).json({ error: 'Error al obtener el parking' });
  }
});
app.post('/parkings', async (req: Request, res: Response) => {
  try {
      const nuevoParking = new Parquear(req.body);
      const parkingGuardado = await nuevoParking.save();
      res.status(201).json(parkingGuardado);
  } catch (error) {
      console.error(error); 
      res.status(400).json({ error: 'Error al crear el parking' });
  }
});

app.patch('/parkings/:id', async (req: Request, res: Response) => {
  try {
    const parkingActualizado = await Parquear.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!parkingActualizado) {
      return res.status(404).json({ error: 'Parking no encontrado' });
    }
    res.json(parkingActualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el parking' });
  }
});

app.delete('/parkings/:id', async (req: Request, res: Response) => {
  try {
    const parkingEliminado = await Parquear.findByIdAndDelete(req.params.id);
    if (!parkingEliminado) {
      return res.status(404).json({ error: 'Parking no encontrado' });
    }
    res.json({ message: 'Parking eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el parking' });
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('API de Alquiler de Vehículos');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
