import { PrismaClient } from '@prisma/client';
import createUser from './createUser';
import findUsersWithRelations from './findUsersWithRelations';

const prisma = new PrismaClient();

async function main() {
  await createUser(prisma);
  const allUsers = await findUsersWithRelations(prisma);

  console.log({
    allUsers,
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
