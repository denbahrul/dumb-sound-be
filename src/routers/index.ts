import { Router } from "express";
import { MusicRoutes } from "./music.router";

export const router = Router();

router.use("/v1/music", MusicRoutes);
