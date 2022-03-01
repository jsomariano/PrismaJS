import { PrismaClient } from '@prisma/client';

export default function findUsersWithRelations(prisma: PrismaClient) {
  return prisma.user.findMany({
    include: {
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
