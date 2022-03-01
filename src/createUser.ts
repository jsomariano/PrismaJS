import { PrismaClient, User } from '@prisma/client';

export default function createUser(prisma: PrismaClient, values: User) {
  const {
    name, email,
  } = values;

  return prisma.user.create({
    data: {
      name,
      email,
    },
  });
}
