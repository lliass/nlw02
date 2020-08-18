import express, { Router } from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsControllers from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsControllers();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
