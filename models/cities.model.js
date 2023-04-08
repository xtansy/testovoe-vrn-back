import { Schema, model } from "mongoose";

export const Cities = model(
    "Cities",
    new Schema(
        {
            id: {
                required: true,
                type: Number,
            },
            name: {
                required: true,
                type: String,
            },
            data: {
                required: true,
                type: Number,
            },
        },
        {
            versionKey: false,
        }
    )
);
