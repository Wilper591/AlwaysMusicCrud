# CREAR BASE DE DATOS:
CREATE DATABASE alwaysmusic;

# CREAR LA TABLA:
CREATE TABLE estudiantes(
	id serial PRIMARY KEY NOT NULL,
	nombre varchar(255) NOT NULL,
	rut varchar(13) NOT NULL UNIQUE,
	curso varchar(50) NOT NULL,
	nivel int NOT NULL,
);
# REVISAR LAS CREDENCIALES EN EL ARCHIVO "db.js" PARA VALIDAR EL ACCESO A LA BD.

# EJECUTAR LA RUTA "/addEstudiante" PARA AÑADIR DATOS A LA TABLA A TRAVÉS DE UN FORMATO .JSON MEDIANTE EL USO DE REQ.BODY. 
EJEMPLO:
{
  "nombre": "Jorge",
  "rut": "24441883-K",
  "curso": "Guitarra",
  "nivel": 1
}

# EJECUTAR RUTA "/estudiantes" PARA TRAER TODOS LOS DATOS INGRESADOS EN LA DB.

# EJECUTAR RUTA "/estudianteRut" PARA TRAER UN REGISTRO FILTRANDO POR RUT.

# EJECUTAR RUTA "/actEstudiante" PARA ACTUALIZAR LOS DATOS. LA FUNCION TOMA LOS PARAMETROS CON UN FORMATO .JSON A TRAVES DEL REQ.BODY. LOS PARAMETROS "actDato" ES LA COLUMNA QUE SE VA A ACTUALIZAR "datoVal" ES EL VALOR NUEVO PARA LA COLUMNA. "buscar" ES EL PARAMETRO POR EL CUAL SE VA A REALIZAR LA BUSQUEDA Y "buscarVal" es el valor de la busqueda.
  {
    "column": "curso",
    "columnValue": "Piano",
    "where": "id",
    "whereValue": "11"
  }

#EJECUTAR RUTA "/delEstudiante" PARA ELIMINAR UN REGISTRO. LA FUNCION RECIBE UN PARAMETRO RUT A TRAVES DE UN REQ.BODY EN FORMATO .JSON, REALIZA LA ELIMINACION FILTRANDO POR RUT.
{
    "rut": "24441883-K"
}