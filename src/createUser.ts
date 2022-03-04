import { PrismaClient, User } from '@prisma/client';

export default async function createUser(prisma: PrismaClient, values: User) {
  const {
    name, email,
  } = values;

  const user = await prisma.user.create({
    data: {
      email,
      name,
    },
  });

  const postAndCategoriesPromise = prisma.post.create({
    data: {
      title: 'Post',
      authorId: user.id,
      categories: {
        create: {
          id: user.id,
        },
      },
    },
  });

  const profilesPromise = prisma.profile.create({
    data: {
      bio: 'My bio',
      userId: user.id,
    },
  });

  await Promise.all([
    postAndCategoriesPromise,
    profilesPromise,
  ]);

  return prisma.user.findFirst({
    where: {
      id: user.id,
    },
    include: {
      posts: {
        include: {
          categories: true,
        },
      },
      profile: true,
    },
  });
  //   return prisma.users.create({
  //   data: {
  //     name: 'John doe',
  //     email: 'johnDoe@email.com',
  //     posts: {
  //       create: {
  //         title: 'my post',
  //         categories: {
  //           create: {
  //             title: 'my category',
  //           },
  //         },
  //       },
  //     },
  //     profile: {
  //       create: {
  //         bio: 'My bio',
  //       },
  //     },
  //   },
  // });
}
