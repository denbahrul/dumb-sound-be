import { Router } from "express";
import { MusicRoutes } from "./music.router";
import { ArtistRoutes } from "./artist.router";

export const router = Router();

router.use("/v1/music", MusicRoutes);
router.use("/v1/artist", ArtistRoutes);
