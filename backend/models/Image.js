import { Schema, model } from "mongoose";

const ImageSchema = new Schema(
    {
        title: { type: String, required: false },
        image: { type: String, required: true },
        user: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Image", ImageSchema);