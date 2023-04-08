import { db } from "../models/index.js";

const Citizens = db.citizens;

export const index = async (req, res) => {
    try {
        const citizens = await Citizens.find({}).exec();
        res.json({
            message: "success",
            data: citizens,
        });
    } catch (error) {
        res.json({
            message: "error",
            data: JSON.stringify(error),
        });
    }
};
