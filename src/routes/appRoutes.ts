import { Router } from "express";
import { fetchData } from "../controllers/dataController";

const router = Router();

router.get("/api/files", fetchData);

export default router;
