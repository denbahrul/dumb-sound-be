import { AddMusicDTO } from "@/dto/music.dto";
import { prisma } from "@/libs/prisma";

class MusicRepositories {
  async addMusic(addMusicDto: AddMusicDTO) {
    return await prisma.music.create({
      data: addMusicDto,
    });
  }
  async getAllMusic() {
    return await prisma.music.findMany();
  }

  async getMusicById(id: number) {
    return await prisma.music.findUnique({
      where: {
        id,
      },
    });
  }
}

export default new MusicRepositories();
