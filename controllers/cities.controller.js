import { db } from "../models/index.js";

const Cities = db.cities;

export const index = async (req, res) => {
    try {
        const cities = await Cities.find({}).exec();
        res.json({
            message: "success",
            data: cities,
        });
    } catch (error) {
        res.json({
            message: "error",
            data: JSON.stringify(error),
        });
    }
};

export const find = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Cities.findOne({ id }).exec();
        res.json({
            message: "success",
            data: item,
        });
    } catch (error) {
        res.json({
            message: "error",
            data: JSON.stringify(error),
        });
    }
};