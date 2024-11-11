import { AddArtistDTO } from "@/dto/artist.dto";
import artistRepositories from "@/repositories/artist.repositories";

class ArtistServices {
  async addArtist(body: AddArtistDTO) {
    return await artistRepositories.addArtist(body);
  }

  async getAllArtist() {
    return await artistRepositories.getAllArtist();
  }
}

export default new ArtistServices();
