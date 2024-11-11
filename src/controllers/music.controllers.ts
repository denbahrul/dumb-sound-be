import cloudinaryServices from "@/services/cloudinary.services";
import musicServices from "@/services/music.services";
import { addMusicSchema } from "@/utils/schema/music.schema";
import { Request, Response } from "express";

class MusicControllers {
  async addMusic(req: Request, res: Response) {
    try {
      const fileUpload = req.files as { [fieldname: string]: Express.Multer.File[] | undefined };
      const body = req.body;

      if (fileUpload && fileUpload.music) {
        const music = fileUpload.music[0];
        const musicUpload = await cloudinaryServices.musicUpload(music as Express.Multer.File);
        body.musicUrl = musicUpload.secure_url;
      }

      if (fileUpload && fileUpload.thumbnail) {
        const thumbnail = fileUpload.thumbnail[0];
        const thumbnailUpload = await cloudinaryServices.upload(thumbnail as Express.Multer.File);
        body.thumbnail = thumbnailUpload.secure_url;
      }

      const value = await addMusicSchema.validateAsync(body);
      const music = await musicServices.addMusic(value);

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

  async getAllMusic(req: Request, res: Response) {
    try {
      const music = await musicServices.getAllMusic();
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
