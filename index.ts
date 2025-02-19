import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Criar um usuário
  const user = await prisma.user.create({
    data: {
      name: "José da Silva Sauro",
      email: "jose@gmail.com",
    },
  });
  console.log("Usuário criado:", user);

  // Buscar todos os usuários
  const users = await prisma.user.findMany();
  console.log("Todos os usuários:", users);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
