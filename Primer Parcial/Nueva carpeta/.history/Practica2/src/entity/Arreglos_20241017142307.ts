const data = {
    vehiculo: {
      totalElementos: 10, 
      tipo: 'maestro',
      datos: [
        { ID: '001', Descripcion: 'Sedán Familiar', Placa: 'XYZ123', Color: 'Rojo' },
        { ID: '002', Descripcion: 'Camioneta 4x4', Placa: 'ABC456', Color: 'Negro' },
        { ID: '003', Descripcion: 'Auto Deportivo', Placa: 'DEF789', Color: 'Azul' },
        { ID: '004', Descripcion: 'SUV Compacto', Placa: 'GHI101', Color: 'Blanco' },
        { ID: '005', Descripcion: 'Motocicleta', Placa: 'JKL112', Color: 'Verde' },
        { ID: '006', Descripcion: 'Furgoneta', Placa: 'MNO123', Color: 'Gris' },
        { ID: '007', Descripcion: 'Coupé', Placa: 'PQR456', Color: 'Amarillo' },
        { ID: '008', Descripcion: 'Convertible', Placa: 'STU789', Color: 'Naranja' },
        { ID: '009', Descripcion: 'Minivan', Placa: 'VWX012', Color: 'Marrón' },
        { ID: '010', Descripcion: 'Pick-up', Placa: 'YZA345', Color: 'Plateado' }
      ]
    },
    espacioParqueo: {
      totalElementos: 10,
      tipo: 'maestro',
      datos: [
        { ID: 'P001', Descripcion: 'Espacio Techado A1' },
        { ID: 'P002', Descripcion: 'Espacio Descubierto B2' },
        { ID: 'P003', Descripcion: 'Espacio Subterráneo C3' },
        { ID: 'P004', Descripcion: 'Espacio VIP D4' },
        { ID: 'P005', Descripcion: 'Espacio Normal E5' },
        { ID: 'P006', Descripcion: 'Espacio Lateral F6' },
        { ID: 'P007', Descripcion: 'Espacio Frente G7' },
        { ID: 'P008', Descripcion: 'Espacio Trasero H8' },
        { ID: 'P009', Descripcion: 'Espacio Especial I9' },
        { ID: 'P010', Descripcion: 'Espacio Reservado J10' }
      ]
    },
    parquear: {
      totalElementos: 10,
      tipo: 'transaccional',
      datos: [
        { ID: 'T001', ID_Vehiculo: '001', ID_Parqueo: 'P001', FechaHoraEntrada: '2024-10-17 08:00', FechaHoraSalida: '2024-10-17 10:00' },
        { ID: 'T002', ID_Vehiculo: '002', ID_Parqueo: 'P002', FechaHoraEntrada: '2024-10-17 09:00', FechaHoraSalida: '2024-10-17 11:00' },
        { ID: 'T003', ID_Vehiculo: '003', ID_Parqueo: 'P003', FechaHoraEntrada: '2024-10-17 10:00', FechaHoraSalida: '2024-10-17 12:00' },
        { ID: 'T004', ID_Vehiculo: '004', ID_Parqueo: 'P004', FechaHoraEntrada: '2024-10-17 11:00', FechaHoraSalida: '2024-10-17 13:00' },
        { ID: 'T005', ID_Vehiculo: '005', ID_Parqueo: 'P005', FechaHoraEntrada: '2024-10-17 12:00', FechaHoraSalida: '2024-10-17 14:00' },
        { ID: 'T006', ID_Vehiculo: '006', ID_Parqueo: 'P006', FechaHoraEntrada: '2024-10-17 13:00', FechaHoraSalida: '2024-10-17 15:00' },
        { ID: 'T007', ID_Vehiculo: '007', ID_Parqueo: 'P007', FechaHoraEntrada: '2024-10-17 14:00', FechaHoraSalida: '2024-10-17 16:00' },
        { ID: 'T008', ID_Vehiculo: '008', ID_Parqueo: 'P008', FechaHoraEntrada: '2024-10-17 15:00', FechaHoraSalida: '2024-10-17 17:00' },
        { ID: 'T009', ID_Vehiculo: '009', ID_Parqueo: 'P009', FechaHoraEntrada: '2024-10-17 16:00', FechaHoraSalida: '2024-10-17 18:00' },
        { ID: 'T010', ID_Vehiculo: '010', ID_Parqueo: 'P010', FechaHoraEntrada: '2024-10-17 17:00', FechaHoraSalida: '2024-10-17 19:00' }
      ]
    }
  };
  