import { db } from "../models/index.js";
import { dbConfig } from "../config/db.config.js";

const { USERNAME, PASSWORD } = dbConfig;

export const mongoDbConnect = () => {
    db.mongoose
        .connect(
            `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.pc9j6.mongodb.net/?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("Successfully connect to MongoDB.");
        })
        .catch((err) => {
            console.error("Connection error", err);
            process.exit();
        });
};
