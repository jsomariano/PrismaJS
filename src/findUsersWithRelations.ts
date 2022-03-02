import { PrismaClient } from '@prisma/client';

export default function findUsersWithRelations(prisma: PrismaClient) {
  return prisma.user.findMany({
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
    /* orderBy: {
      id: 'asc',
    },
    where: {
      id: {
        not: 1,
      },
    }, */
  });
}
