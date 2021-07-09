import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { routes } from "./routes";

const app = express();
const PORT = 3000;

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:4300'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// Then pass these options to cors:
app.use(cors(options));

app.use(bodyParser.urlencoded({ extended: false }));

routes.forEach((route) => {
  const { method, path, middleware, handler } = route;
  app[method](path, ...middleware, handler);
});

app.listen(PORT, () => {
  console.log(`Express Typescript app @ http://localhost:${PORT}`);
});
