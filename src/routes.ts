import healthController from "@controllers/healthController";
import unhandledController from "@controllers/unhandledController";
import { Application } from "express";

export default function configureRoutes(app: Application) {
  // -------------- HEALTH/STATUS ----------------
  app.get("/health", healthController.healthCheck);

  // -------------- UNHANDLED ----------------
  app.use("*", unhandledController.unhandledRequest);
}
