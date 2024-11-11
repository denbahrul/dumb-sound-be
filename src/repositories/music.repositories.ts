import { prisma } from "@/libs/prisma";

class MusicRepositories {
  async addMusic(musicUrl: string) {
    return await prisma.music.create({
      data: {
        musicUrl: musicUrl,
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
