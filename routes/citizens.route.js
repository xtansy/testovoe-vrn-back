import { index } from "../controllers/citizens.controller.js";

export const citizensRoute = (app) => {
    app.get("/citizens/all", index);
};