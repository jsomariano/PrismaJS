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
    // skip: 3,
    // take: 2,
    // cursor: {
    //   id: 5,
    // },
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
