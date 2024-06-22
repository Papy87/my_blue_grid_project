import { Request, Response } from "express";
import axios from "axios";
import { getCache, setCache } from "../lib/redis";
import { transformData } from "../utils/transformData";
import { API_URL,CACHE_KEY,CACHE_TIME } from "../utils/constants";



export const fetchData = async (req: Request, res: Response) => {
  try {
    //Checking if we have the data in cache
    let data = await getCache(CACHE_KEY);
    if (!data) {
      //Fetching data from the API
      const response = await axios.get(API_URL);
      data = transformData(response.data);
      //Setting the data in cache
      await setCache(CACHE_KEY, data, CACHE_TIME);
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
