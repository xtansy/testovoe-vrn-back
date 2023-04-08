import { Schema, model } from "mongoose";

const GroupItemSchema = new Schema({
    type: String,
    name: String
})

export const Citizens = model(
    "Citizens",
    new Schema({
        id: {
            required: true,
            type: Number,
        },
        name: {
            required: true,
            type: String,
        },
        city_id: {
            required: true,
            type: Number,
        },
        groups: [GroupItemSchema],
    }, {
        versionKey: false
    })
);