import { Router } from "express";
import rutasEstudiantes from "./estudiantes.routes.js";
const router = Router();

//Rutas Principal
router.get("/", (req, res) => {
  try {
    res.send("Bienvenido a la Academia Always Music");
  } catch (error) {
    console.error("Hubo un error", error.message);
    res.status(500).send(error.message);
  }
});

router.use("/estudiantes", rutasEstudiantes);
export default router;