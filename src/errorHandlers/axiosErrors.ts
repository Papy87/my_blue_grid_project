import { Response } from "express";

export const handleAxiosError = (error: any, res: Response) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    res.status(error.response.status).json({
      error: "Request failed",
      message: error.message,
      statusCode: error.response.status,
    });
  } else if (error.request) {
    // The request was made but no response was received
    res.status(408).json({
      error: "Request timed out",
      message: error.message,
    });
  } else {
    // Something happened in setting up the request that triggered an Error
    res.status(500).json({
      error: "Network error",
      message: error.message,
    });
  }
};
