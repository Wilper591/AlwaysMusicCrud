import { pool } from "./db.js";

/* Agregar nuevo estudiante */
export const addEstudiante = async (nombre, rut, curso, nivel) => {
  const text = `INSERT INTO estudiantes(nombre, rut, curso, nivel) VALUES($1, $2, $3, $4) RETURNING *`;
  const values = [nombre, rut, curso, nivel];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result.rows;
};

/* addEstudiante("Olga", "2433855-4", "Chello", 5); */

/* Consultar los estudiantes registrados */
export const getEstudiantes = async () => {
  const result = await pool.query("SELECT * FROM estudiantes");
  console.log(result.rows);
  return result.rows;
};
/* getEstudiantes() */

/* Consultar los estudiantes por rut */
export const getEstudiantesByRut = async (rut) => {
  const text = `SELECT * FROM estudiantes WHERE rut = $1`;
  const values = [rut];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result.rows;
};
/* getEstudiantesByRut("24441883-K"); */

/* Actualizar la información de un estudiante */
export const actEstudiante = async (setData, dataVal, dataBuscar, buscarValue) => {
  const text = `UPDATE estudiantes SET curso = $1 WHERE ${dataBuscar} = $2 RETURNING *`;
  const values = [dataVal, buscarValue];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result.rows;
};
/* actEstudiante(2, "22338992-3"); */

export const delEstudiante = async (rut) => {
  const text = `DELETE FROM estudiantes WHERE rut = $1 RETURNING *`;
  const values = [rut];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result.rows;
};
/* delEstudiante("24338992-3"); */
