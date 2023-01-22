import { config } from "dotenv";

config();
export default {
    BucketName: process.env.BUCKET_NAME || "15113120egd",
    Endpoint: process.env.ENDPOINT || "15113120egd",
};