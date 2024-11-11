import { AddMusicDTO } from "@/dto/music.dto";
import musicRepositories from "@/repositories/music.repositories";

class MusicServices {
  async addMusic(body: AddMusicDTO) {
    return await musicRepositories.addMusic(body);
  }

  async getMusicById(id: number) {
    return await musicRepositories.getMusicById(id);
  }
}

export default new MusicServices();
