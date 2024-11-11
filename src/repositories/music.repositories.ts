import { AddMusicDTO } from "@/dto/music.dto";
import { prisma } from "@/libs/prisma";

class MusicRepositories {
  async addMusic(addMusicDto: AddMusicDTO) {
    return await prisma.music.create({
      data: addMusicDto,
    });
  }
  async getAllMusic() {
    return await prisma.music.findMany({
      include: {
        artist: true,
      },
    });
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
