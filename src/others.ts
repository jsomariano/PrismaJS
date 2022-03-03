import { PrismaClient, User } from '@prisma/client';

export async function usingRaw(prisma: PrismaClient) {
  // Tagged template
  const users = await prisma.$queryRaw<User[]>`
    SELECT * FROM User
  `;

  return users;
}

export default {
  usingRaw,
};
