import artistServices from "@/services/artist.services";
import { addArtistSchema } from "@/utils/schema/artist.schema";
import { Request, Response } from "express";

class ArtistControllers {
  async addArtist(req: Request, res: Response) {
    try {
      const body = req.body;

      const value = await addArtistSchema.validateAsync(body);
      const artist = await artistServices.addArtist(value);

      res.json({
        artist,
      });
    } catch (error) {
      console.log(error);
      const err = error as Error;
      res.status(500).json({
        message: err.message,
      });
    }
  }

  async getAllArtist(req: Request, res: Response) {
    try {
      const artist = await artistServices.getAllArtist();
      res.json({
        artist,
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

export default new ArtistControllers();
