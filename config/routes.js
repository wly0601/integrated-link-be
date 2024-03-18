const express = require("express");
const controllers = require("../app/controllers");
const appRoute = express.Router();

appRoute.get("/", controllers.main.root);
appRoute.post("/link", controllers.link.create);
appRoute.get("/link/:id", controllers.link.getById);
appRoute.get("/link", controllers.link.get);
appRoute.put("/link/:id", controllers.link.update);
appRoute.delete("/link/:id", controllers.link.delete);

appRoute.use(controllers.main.onLost);
appRoute.use(controllers.main.onError);

module.exports = appRoute;
