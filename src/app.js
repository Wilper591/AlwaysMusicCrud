import { app, PORT} from "../index.js"

app.listen(PORT, () => {
  console.log(`Servidor conectado al puerto ${PORT} - PID ${process.pid}`);
});
