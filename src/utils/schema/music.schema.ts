import { AddMusicDTO } from "@/dto/music.dto";
import Joi from "joi";

export const addMusicSchema = Joi.object<AddMusicDTO>({
  title: Joi.string().required(),
  year: Joi.number().required(),
  artistId: Joi.number().required(),
  musicUrl: Joi.any(),
  thumbnail: Joi.any(),
});
