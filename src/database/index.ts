import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class RegisterUser {
  private async userData() {
    const newUser = await prisma.user.create({
      data: {
        name: "",
        email: "",
        CPF: "",
      },
    });
    console.log(newUser);
  }

  public saveUser() {
    this.userData()
      .then(async () => {
        await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.log("Error " + e);
        await prisma.$disconnect();
        process.exit(1);
      });
  }
}

export const registerUser = new RegisterUser();
