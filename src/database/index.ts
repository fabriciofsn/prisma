import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function user() {
  const newUser = await prisma.user.create({
    data: {
      name: "Fabricio",
      email: "email@gmail.com",
      CPF: "06734768545",
    },
  });
  console.log(newUser);
}

user()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("Error " + e);
    await prisma.$disconnect();
    process.exit(1);
  });
