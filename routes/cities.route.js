import { index } from "../controllers/cities.controller.js";
import { find } from "../controllers/cities.controller.js";

export const citiesRoute = (app) => {
    app.get("/cities/all", index);
    app.get("/cities/:id", find);
};