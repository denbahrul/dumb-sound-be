import upload from "@/middlewares/upload-file";
import { Router } from "express";

export const router = Router();

router.post("/v1/music/add", upload.single("music"));
