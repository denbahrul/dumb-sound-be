import { ArtisTypeEnum } from "@prisma/client";

export interface AddArtistDTO {
  name: string;
  old?: number;
  type: ArtisTypeEnum;
  careerStart?: string;
}
