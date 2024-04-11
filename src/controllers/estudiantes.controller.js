import { pool } from "../db.js";
import query from "./query.estudiantes.json" with { type: "json" };
/* Funciones crud de tabla Estudiantes */

/* Agregar nuevo estudiante */
const addEstudiante = async () => {
  const result = await pool.query(query.addStudent);
  console.log(result.rows);
  return result.rows;
};

/* Consultar los estudiantes registrados */
const getEstudiantes = async () => {
  const result = await pool.query(query.getAllStudents);
  console.log(result.rows);
  return result.rows;
};

/* Consultar los estudiantes por rut */
const getEstudiantesByRut = async () => {
  const result = await pool.query(query.getStudentByRut);
  console.log(result.rows);
  return result.rows;
};

/* Actualizar la información de un estudiante */
const actEstudiante = async () => {
  const result = await pool.query(query.updateStudent);
  console.log(result.rows);
  return result.rows;
};

const delEstudiante = async () => {
  const result = await pool.query(query.deleteStudent);
  console.log(result.rows);
  return result.rows;
};
/* Ejemplo: delEstudiante("24338992-3"); */

export { addEstudiante, getEstudiantes, getEstudiantesByRut, actEstudiante, delEstudiante}