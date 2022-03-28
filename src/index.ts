import express from "express";
import cors from "cors";
import errorHandler from "@middlewares/errorHandler";
import configureRoutes from "./routes";

const { PORT = 8080 } = process.env;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

configureRoutes(app);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default app;
