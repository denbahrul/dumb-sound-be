import musicControllers from "@/controllers/music.controllers";
import upload from "@/middlewares/upload-file";
import { Router } from "express";

export const MusicRoutes = Router();

MusicRoutes.post(
  "/add",
  upload.fields([
    {
      name: "music",
      maxCount: 1,
    },
    {
      name: "thumbnail",
      maxCount: 1,
    },
  ]),

  musicControllers.addMusic
);
MusicRoutes.get("/", musicControllers.getAllMusic);
MusicRoutes.get("/:id", musicControllers.getMusicById);
