import express from "express";
import cors from "cors";

import { mongoDbConnect } from "./core/mongodb.js";
import { citiesRoute } from "./routes/cities.route.js";
import { citizensRoute } from "./routes/citizens.route.js";

const app = express();

app.use(cors());

const PORT = 3000

mongoDbConnect();

citiesRoute(app);
citizensRoute(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})