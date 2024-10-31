import { IVehiculo,IEspacio,IParquear,vehiculos,espaciosParqueo,parqueos } from "./data";

function mostrarVehiculos(): void {
    vehiculos.forEach(vehiculo => {
      console.log(`ID: ${vehiculo.ID}, Descripción: ${vehiculo.Descripcion}, Placa: ${vehiculo.Placa}, Color: ${vehiculo.Color}`);
    });
  }
  function mostrarEspaciosParqueo(): void {
    espaciosParqueo.forEach(parqueo => {
      console.log(`ID: ${parqueo.ID}, Descripción: ${parqueo.Descripcion}`);
    });
  }
  function buscarVehiculoPorId(id: number, callback: (vehiculo: IVehiculo | undefined) => void): void {
    const vehiculo = vehiculos.find(vehiculo => vehiculo.ID === id);
    callback(vehiculo);
  }
  function buscarEspacioParqueoPorId(id: number): Promise<IEspacio | undefined> {
    return new Promise((resolve, reject) => {
      const espacio = espaciosParqueo.find(espacio => espacio.ID === id);
      if (espacio) {
        resolve(espacio);
      } else {
        reject("Espacio de parqueo no encontrado");
      }
    });
  }
  async function buscarEspacioAsync(id: number): Promise<void> {
    try {
      const espacio = await buscarEspacioParqueoPorId(id);
      console.log("Espacio de parqueo encontrado:", espacio);
    } catch (error) {
      console.error(error);
    }
  }
  export{
    mostrarVehiculos,
    mostrarEspaciosParqueo,
    buscarVehiculoPorId,
    buscarEspacioParqueoPorId,
    buscarEspacioAsync
  }