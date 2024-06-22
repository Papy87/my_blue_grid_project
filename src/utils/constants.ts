import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const API_URL = "https://rest-test-eight.vercel.app/api/test";
const CACHE_KEY = process.env.CACHE_KEY || "redisKey";
//Setting the cache time to 10 minutes
const CACHE_TIME = 60 * 10;
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

export { API_URL, CACHE_KEY, CACHE_TIME, REDIS_URL };
