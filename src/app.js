import { app } from "../index.js";
const PORT = 3000;

/* Se levanta el servidor */
app.listen(PORT, () => {
  console.log(`Servidor conectado al puerto ${PORT} - PID ${process.pid}`);
});
