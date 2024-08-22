import { config } from 'dotenv';
config()
export default {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_DEV: process.env.NODE_DEV
}