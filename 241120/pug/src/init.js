import "./db";
import "./models/video";
import "./models/user"
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`☃ Server Listning on Port http://localhost:${PORT} ☃`);

app.listen(4000, handleListening);
