import cloudinaryServices from "@/services/cloudinary.services";
import musicServices from "@/services/music.services";
import { Request, Response } from "express";

class MusicControllers {
  async addMusic(req: Request, res: Response) {
    try {
      const fileUpload = req.file;

      if (fileUpload) {
        const musicUpload = await cloudinaryServices.upload(fileUpload as Express.Multer.File);
        const musicUrl = musicUpload.secure_url;

        const music = await musicServices.addMusic(musicUrl);
        res.json({
          music,
        });
      }
    } catch (error) {
      console.log(error);
      const err = error as Error;
      res.status(500).json({
        message: err.message,
      });
    }
  }

  async getMusicById(req: Request, res: Response) {
    try {
      const musicId = +req.params.id;
      const music = await musicServices.getMusicById(musicId);
      res.json({
        music,
      });
    } catch (error) {
      console.log(error);
      const err = error as Error;
      res.status(500).json({
        message: err.message,
      });
    }
  }
  async a(req: Request, res: Response) {
    try {
    } catch (error) {
      console.log(error);
      const err = error as Error;
      res.status(500).json({
        message: err.message,
      });
    }
  }
}

export default new MusicControllers();
