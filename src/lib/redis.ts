import Redis from "ioredis";

const redis = new Redis();

const getCache = async (key: string) => {
  const value = await redis.get(key);
  return value ? JSON.parse(value) : null;
};

const setCache = async (key: string, value: string, time: number) => {
  await redis.set(key, JSON.stringify(value), "EX", time);
};

export { getCache, setCache };
