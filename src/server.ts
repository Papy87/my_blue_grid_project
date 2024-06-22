import express from "express";
import appRoutes from "./routes/appRoutes";
import { PORT } from "../src/utils/constants";

const app = express();

app.use("/", appRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
