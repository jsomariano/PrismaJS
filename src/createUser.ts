import { PrismaClient } from '@prisma/client';

export default function createUser(prisma: PrismaClient) {
  return prisma.user.create({
    data: {
      name: 'John doe',
      email: 'johnDoe@email.com',
      posts: {
        create: {
          title: `Post number ${Math.random()}`,
          categories: {
            create: {
              id: 1,
            },
          },
        },
      },
      profile: {
        create: { bio: 'I like play elden ring' },
      },
    },
  });
}
