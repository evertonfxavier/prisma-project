import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //CREATE
  // Criar um usuário
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Maria Souza",
  //     email: "maria@exemplo.com",
  //     address: "Rua das Flores, 123", // Novo campo
  //   },
  // });
  // console.log("Usuário criado:", user);

  //UPDATE
  //Atualizar endereço de um usuário:
  await prisma.user.update({
    where: { email: "jose@gmail.com" },
    data: {
      address: {
        rua: "Rua das Pedras",
        numero: 33,
        cidade: "São Carlos",
      },
    },
  });

  //GET
  //Buscar usuários por endereço:
  // const usersByAddress = await prisma.user.findMany({
  //   where: {
  //     address: {
  //       contains: "Flores",
  //     },
  //   },
  // });
  // console.log("Usuários com endereço contendo 'Flores':", usersByAddress);

  //DELETE
  //Excluir um usuário por e-mail:
  // await prisma.user.delete({
  //   where: {
  //     email: "maria@exemplo.com",
  //   },
  // });

  //GET ALL
  // Buscar todos os usuários
  const users = await prisma.user.findMany();
  console.log("Todos os usuários:", users);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
