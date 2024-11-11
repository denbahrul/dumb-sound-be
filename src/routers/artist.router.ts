import artistControllers from "@/controllers/artist.controllers";
import { Router } from "express";

export const ArtistRoutes = Router();

ArtistRoutes.get("/", artistControllers.getAllArtist);
ArtistRoutes.post("/add", artistControllers.addArtist);
