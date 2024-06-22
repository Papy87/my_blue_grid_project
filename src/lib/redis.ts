import Redis from "ioredis";
import { REDIS_URL } from "../utils/constants";

const redis = new Redis(REDIS_URL);

const getCache = async (key: string) => {
  const value = await redis.get(key);
  return value ? JSON.parse(value) : null;
};

const setCache = async (key: string, value: string, time: number) => {
  await redis.set(key, JSON.stringify(value), "EX", time);
};

export { getCache, setCache };
