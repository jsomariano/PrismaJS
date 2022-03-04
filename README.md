# PrismaJS
Learning Prisma JS

You can now invoke the Prisma CLI by prefixing it with npx:

```shell
npx prisma
```
---

# Migrations

To map your data model to the database schema, you need to use the prisma migrate CLI commands:

```shell
prisma migrate dev --name init
```

---

# Update prisma client

run 

```shell
npx prisma generate
```

# Prisma Studio

Explore the data in Prisma Studio
Prisma Studio is a visual editor for the data in your database.

Use CLI command 
```
npx prisma studio 
```

---

# Introspect

The typical workflow for projects that are not using Prisma Migrate, but instead use plain SQL or another migration tool looks as follows:

- Change the database schema (e.g. using plain SQL)
- Run `prisma db pull` to update the Prisma schema
- Run `prisma generate` to update Prisma Client