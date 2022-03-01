import { PrismaClient } from '@prisma/client';

export default function updateUser(prisma: PrismaClient) {
  return prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: 'Junior Santos',
    },
  });
}
