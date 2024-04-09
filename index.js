import express from "express";
import rutas from "./src/rutas.js"
export const app = express();


//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Rutas
app.use("/", rutas);

//Ruta Genérica
app.get("*", (req, res) => {
  res.send("Esta página No Existe");
});

