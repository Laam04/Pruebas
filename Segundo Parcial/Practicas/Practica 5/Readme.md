# Configuración de Conexión con SQLite y TypeORM

*En esta practica utilice SQLite como base de datos con TypeORM.
*El anterior utilizaba Mongoose.

*Varios elementos de la practica anterior fueron eliminados para evitar errores en la ejecucion del codigo.

*opté por no utilizar Use-Case.

/ormconfig.ts
*Viene siendo el datasource para establecer la conexión con SQLite.

src/model/parquear.ts 
*define la estructura de la entidad Parquear.
*Tuve que actualizar casi todas las entidades para que el proyecto funcionara correctamente
/En el anterior puede observar que la entidad es parking  y no parquear, borré parking que contiene la conexion con mongoose para evitar errores.

src/dto/parquear.dto.ts
src/routes/parquearroutes.ts
*Las validaciones y rutas creadas para las entidades, principalmente parquear para poder gestionarlas

/repository
*Creé los repositorios correspondientes para las entidades.

  [GET Parquear](ejGET.jpg)
  [POST Parquear](ejPOST.jpg)

Al realizar el POST para Parquear no logré que los datos se relacionaran de forma que muestre el id de vehiculo y espacio correspondientes, solo aparecen como null.