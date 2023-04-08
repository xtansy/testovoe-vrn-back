import mongoose from "mongoose";
import { Cities } from "./cities.model.js";
import { Citizens } from "./citizens.model.js";

mongoose.Promise = global.Promise;


export const db = {
    mongoose,
    cities: Cities,
    citizens: Citizens
};