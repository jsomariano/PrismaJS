import { PrismaClient, User } from '@prisma/client';

export async function usingRaw(prisma: PrismaClient) {
  // Tagged template
  const users = await prisma.$queryRaw<User[]>`
    SELECT * FROM Users
  `;

  return users;
}

export default {
  usingRaw,
};
