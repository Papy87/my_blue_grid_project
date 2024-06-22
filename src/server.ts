import express from "express";
import appRoutes from "./routes/appRoutes";

const PORT = process.env.PORT || 5002;

const app = express();
app.use(express.json());
app.use("/", appRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
