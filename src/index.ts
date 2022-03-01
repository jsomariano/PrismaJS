import { PrismaClient } from '@prisma/client';
import createUser from './createUser';
import findUsersWithRelations from './findUsersWithRelations';
import updateUser from './updateUser';

const prisma = new PrismaClient();

async function main() {
  await createUser(prisma);
  await updateUser(prisma);
  const allUsers = await findUsersWithRelations(prisma);

  console.log({
    allUsers: allUsers[0].posts,
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
