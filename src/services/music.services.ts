import musicRepositories from "@/repositories/music.repositories";

class MusicServices {
  async addMusic(musicUrl: string) {
    return await musicRepositories.addMusic(musicUrl);
  }

  async getMusicById(id: number) {
    return await musicRepositories.getMusicById(id);
  }
}

export default new MusicServices();
