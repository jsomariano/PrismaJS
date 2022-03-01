import { PrismaClient, Users } from '@prisma/client';

export async function usingRaw(prisma: PrismaClient) {
  // Tagged template
  const users = await prisma.$queryRaw<Users[]>`
    SELECT * FROM Users
  `;

  return users;
}

export default {
  usingRaw,
};
