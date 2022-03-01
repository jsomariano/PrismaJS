import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient, User } from '@prisma/client';
import createUser from './createUser';
import findUsersWithRelations from './findUsersWithRelations';
import updateUser from './updateUser';

const expressPort = 3000;

const prisma = new PrismaClient();
const app = express();
app.use(bodyParser.json());

async function main() {
  app.get('/users', async (req, res) => {
    const allUsers = await findUsersWithRelations(prisma);

    res.json(allUsers);
  });
  app.post('/users', async (req, res) => {
    const {
      name, email,
    } = req.body;

    const userValues = { name, email } as User;

    const user = await createUser(prisma, userValues);

    res.json(user);
  });
  app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const userValues = { name, email } as User;

    const userUpdated = await updateUser(prisma, Number(id), userValues);

    res.json(userUpdated);
  });
  app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(user);
  });

  app.listen(expressPort);

  console.log(`Running on  http://localhost:${expressPort}`);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
