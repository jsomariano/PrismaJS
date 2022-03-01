import { PrismaClient } from '@prisma/client';

export default function findUsersWithRelations(prisma: PrismaClient) {
  return prisma.user.findMany({
  //  where: {
  //    id: {
  //      not: 1,
  //    },
  //  },
    include: {
      profile: true,
      posts: {
        include: {
          author: {
            select: {
              name: true,
            },
          },
          categories: true,
        },
      },
    },
  });
}
