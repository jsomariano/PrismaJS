import { PrismaClient, User } from '@prisma/client';

export default function updateUser(prisma: PrismaClient, id: number, values: User) {
  const {
    name, email,
  } = values;

  return prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
    },
  });
}
