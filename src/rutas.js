import { Router } from "express";
export const router = Router();
import {
  getEstudiantes,
  getEstudiantesByRut,
  addEstudiante,
  actEstudiante,
  delEstudiante,
} from "./estudiantesCrud.js";

//Rutas

router.get("/", (req, res) => {
  try {
    res.send("Ruta Principal conectada");
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});
/* Obtener todos los Estudiantes */
router.get("/estudiantes", async (req, res) => {
  try {
    const estudiantes = await getEstudiantes();
    res.send(estudiantes);
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

/* Obtener estudiante por rut */
router.get("/estudianteRut", async (req, res) => {
  try {
    const { rut } = req.body;
    const getByRut = await getEstudiantesByRut(rut);
    res.send(getByRut);
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

/* Agregar Estudiante */
router.post("/addEstudiante", async (req, res) => {
  try {
    const { nombre, rut, curso, nivel } = req.body;
    const newEstudiante = await addEstudiante(nombre, rut, curso, nivel);
    res.send("Estudiante agregado Correctamente");
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

/* Actualizar datos de estudiante */
router.put("/actEstudiante", async (req, res) => {
  const { column, columnValue, where, whereValue } = req.body;
  try {
    const actDatosEstudiante = await actEstudiante(
      column,
      columnValue,
      where,
      whereValue
    );
    res.send(actDatosEstudiante);
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

/* Borrar estudiante por rut */
router.delete("/delEstudiante", async (req, res) => {
  try {
    const { rut } = req.body;
    const eraseEstudiante = delEstudiante(rut);
    res.send("Estudiante Eliminado Correctamente");
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

export default router;
