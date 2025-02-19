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
  // await prisma.user.update({
  //   where: { email: "jose@gmail.com" },
  //   data: {
  //     address: {
  //       rua: "Rua das Pedras",
  //       numero: 33,
  //       cidade: "São Carlos",
  //     },
  //   },
  // });
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
  // const users = await prisma.user.findMany();
  // console.log("Todos os usuários:", users);
  //
  //
  // --------- Fazer a mesma coisa com Posts realicionados ao usuário ---------
  //
  //
  //CREATE
  // Criar um post
  // const post = await prisma.post.create({
  //   data: {
  //     title: "Meu primeiro post",
  //     content: "Este é o conteúdo do meu primeiro post.",
  //     author: {
  //       connect: {
  //         id: 2,
  //         // email: "jose@gmail.com",
  //       },
  //     },
  //   },
  // });
  // console.log("Post criado:", post);
  //
  //
  // --------- Fazer a mesma coisa com Os paises realicionados a vários usuário ---------
  //
  //
  //CREATE
  // Criar um país
  // const argentina = await prisma.country.create({
  //   data: {
  //     name: "Argentina",
  //   },
  // });
  // // Criar um usuário associado ao país
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Carlos",
  //     email: "carlos@exemplo.com",
  //     country: {
  //       connect: { id: argentina.id }, // Associa o usuário ao país
  //     },
  //   },
  // });
  //
  //
  //GET BY COUNTRY
  // const usuariosArgentina = await prisma.user.findMany({
  //   where: {
  //     country: {
  //       name: "Argentina", // Filtra por nome do país
  //     },
  //   },
  //   include: {
  //     country: true, // Inclui os dados do país no resultado
  //   },
  // });

  // console.log(usuariosArgentina);
  //
  //
  //UPDATE CONTRY BY USER
  await prisma.user.update({
    where: { email: "carlos@exemplo.com" },
    data: {
      country: {
        connect: { name: "Brasil" }, // Muda o país do usuário
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());

//REMINDER: Alias para atualizar as migrations
//yarn prisma-migrate-update -- add_country_relation
