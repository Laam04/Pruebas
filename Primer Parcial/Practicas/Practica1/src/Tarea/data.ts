
 interface IVehiculo {
    ID: number;
    Descripcion: string;
    Placa: string;
    Color: string;
  }
  
  interface IEspacio{
    ID: number;
    Descripcion: string;
  }

  interface IParquear {
    ID: number;
    IDVehiculo: number;
    IDParqueo: number;
    FechaE: Date;
    FechaS: Date;
  }
  const vehiculos: IVehiculo[] = [
    { ID: 1, Descripcion: "Grand Vitara", Placa: "ABC123", Color: "Rojo" },
    { ID: 2, Descripcion: "Tsuru Tuneado", Placa: "XYZ456", Color: "Negro" },
    { ID: 3, Descripcion: "Mini-Van", Placa: "LMN789", Color: "Blanco" },
    { ID: 4, Descripcion: "Ford Raptor", Placa: "OPQ321", Color: "Azul" },
    { ID: 5, Descripcion: "Lamborghini Gallardo", Placa: "HIJ654", Color: "Verde" },
  ];
  const espaciosParqueo: IEspacio[] = [
    { ID: 1, Descripcion: "A1" },
    { ID: 2, Descripcion: "B2" },
    { ID: 3, Descripcion: "C3" },
    { ID: 4, Descripcion: "D4" },
    { ID: 5, Descripcion: "E5" },
  ];
  const parqueos: IParquear[] = [
    { ID: 1, IDVehiculo: 1, IDParqueo: 2, FechaE: new Date("2024-09-01T08:00:00"), FechaS: new Date("2024-09-01T10:00:00") },
    { ID: 2, IDVehiculo: 2, IDParqueo: 1, FechaE: new Date("2024-09-01T08:00:00"), FechaS: new Date("2024-09-01T10:00:00") },
    { ID: 3, IDVehiculo: 3, IDParqueo: 3, FechaE: new Date("2024-09-03T07:30:00"), FechaS: new Date("2024-09-03T09:30:00") },
    { ID: 4, IDVehiculo: 4, IDParqueo: 5, FechaE: new Date("2024-09-03T09:30:00"), FechaS: new Date("2024-09-03T12:30:00") },
    { ID: 5, IDVehiculo: 5, IDParqueo: 4, FechaE: new Date("2024-09-03T10:30:00"), FechaS: new Date("2024-09-03T13:30:00") },
  ];

  export {
    IVehiculo,
    IEspacio,
    IParquear,
    vehiculos,
    espaciosParqueo,
    parqueos
  }


