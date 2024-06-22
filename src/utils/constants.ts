import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const PORT = process.env.PORT || 5002;
const API_URL = "https://rest-test-eight.vercel.app/api/test";
const CACHE_KEY = process.env.CACHE_KEY || "redisKey";
//Setting the cache time to 1 hour.
const CACHE_TIME = 60 * 60;

const REDIS_URL = process.env.REDIS_URL || "redis://redis:6379";

export { PORT, API_URL, CACHE_KEY, CACHE_TIME, REDIS_URL };
