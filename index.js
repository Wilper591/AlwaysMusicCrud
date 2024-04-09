import express from "express";
import {
  getEstudiantes,
  getEstudiantesByRut,
  addEstudiante,
  actEstudiante,
  delEstudiante,
} from "./src/estudiantesCrud.js";

export const app = express();
export const PORT = 3000;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Rutas

/* Obtener todos los Estudiantes */
app.get("/estudiantes", async (req, res) => {
  try {
    const estudiantes = await getEstudiantes();
    res.send(estudiantes);
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

/* Obtener estudiante por rut */
app.get("/estudianteRut", async (req, res) => {
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
app.post("/addEstudiante", async (req, res) => {
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
app.put("/actEstudiante", async (req, res) => {
  try {
    const { actDato, datoVal, buscar, buscarVal } = req.body;
    const actDatosEstudiante = await actEstudiante(
      actDato,
      datoVal,
      buscar,
      buscarVal
    );
    res.send(actDatosEstudiante);
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

/* Borrar estudiante por rut */
app.delete("/delEstudiante", async (req, res) => {
  try {
    const { rut } = req.body;
    const eraseEstudiante = delEstudiante(rut);
    res.send("Estudiante Eliminado Correctamente");
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

//Ruta Genérica
app.get("*", (req, res) => {
  res.send("<h1>Esta página No Existe</h1>");
});
