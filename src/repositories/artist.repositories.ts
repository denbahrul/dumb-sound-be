import { AddArtistDTO } from "@/dto/artist.dto";
import { prisma } from "@/libs/prisma";

class ArtistRepositories {
  async addArtist(addArtistDto: AddArtistDTO) {
    return await prisma.artist.create({
      data: addArtistDto,
    });
  }
  async getAllArtist() {
    return await prisma.artist.findMany();
  }
}

export default new ArtistRepositories();
