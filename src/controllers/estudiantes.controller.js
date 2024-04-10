import { pool } from "../db.js";
/* Funciones crud de tabla Estudiantes */
/* Agregar nuevo estudiante */
const addEstudiante = async (nombre, rut, curso, nivel) => {
  const text = `INSERT INTO estudiantes(nombre, rut, curso, nivel) VALUES($1, $2, $3, $4) RETURNING *`;
  const values = [nombre, rut, curso, nivel];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result.rows;
};

/* Ejemplo: addEstudiante("Olga", "2433855-4", "Chello", 5); */

/* Consultar los estudiantes registrados */
const getEstudiantes = async () => {
  const result = await pool.query("SELECT * FROM estudiantes");
  console.log(result.rows);
  return result.rows;
};
/* Ejemplo: getEstudiantes() */

/* Consultar los estudiantes por rut */
const getEstudiantesByRut = async (rut) => {
  const text = `SELECT * FROM estudiantes WHERE rut = $1`;
  const values = [rut];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result.rows;
};
/* Ejemplo: getEstudiantesByRut("24441883-K"); */

/* Actualizar la información de un estudiante */
const actEstudiante = async (setData, dataVal, dataBuscar, buscarValue) => {
  const text = `UPDATE estudiantes SET ${setData} = $1 WHERE ${dataBuscar} = $2 RETURNING *`;
  const values = [dataVal, buscarValue];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result.rows;
};
/* Ejemplo: actEstudiante("curso", 2, "rut", "22338992-3"); */

const delEstudiante = async (rut) => {
  const text = `DELETE FROM estudiantes WHERE rut = $1 RETURNING *`;
  const values = [rut];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result.rows;
};
/* Ejemplo: delEstudiante("24338992-3"); */

export { addEstudiante, getEstudiantes, getEstudiantesByRut, actEstudiante, delEstudiante}