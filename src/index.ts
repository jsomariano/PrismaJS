import { PrismaClient } from '@prisma/client';
import util from 'util';
import createUser from './createUser';
import findUsersWithRelations from './findUsersWithRelations';

const prisma = new PrismaClient();

async function main() {
  await createUser(prisma);
  const allUsers = await findUsersWithRelations(prisma);

  console.log(util.inspect(allUsers, false, null, true));
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
