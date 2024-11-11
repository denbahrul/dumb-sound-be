import { AddArtistDTO } from "@/dto/artist.dto";
import { ArtisTypeEnum } from "@prisma/client";
import Joi from "joi";

export const addArtistSchema = Joi.object<AddArtistDTO>({
  name: Joi.string().required(),
  careerStart: Joi.string(),
  old: Joi.number(),
  type: Joi.string().valid(ArtisTypeEnum.Duo, ArtisTypeEnum.Group, ArtisTypeEnum.Solo),
});
