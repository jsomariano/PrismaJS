import { PrismaClient } from '@prisma/client';

export default async function createUser(prisma: PrismaClient) {
  const user = await prisma.users.create({
    data: {
      email: 'johnDoe@email.com',
      name: 'John Doe',
    },
  });

  const postAndCategoriesPromise = prisma.posts.create({
    data: {
      title: 'Post',
      authorId: user.id,
      categories: {
        create: {
          title: 'My category',
        },
      },
    },
  });

  const profilesPromise = prisma.profiles.create({
    data: {
      bio: 'My bio',
      userId: user.id,
    },
  });

  await Promise.all([
    postAndCategoriesPromise,
    profilesPromise,
  ]);

/*   return prisma.users.create({
    data: {
      name: 'John doe',
      email: 'johnDoe@email.com',
      posts: {
        create: {
          title: 'my post',
          categories: {
            create: {
              title: 'my category',
            },
          },
        },
      },
      profile: {
        create: {
          bio: 'My bio',
        },
      },
    },
  }); */
}
