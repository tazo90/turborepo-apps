const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userData = [
  {
    name: 'Alice',
    email: 'alice@gmail.com',
    posts: {
      create: [
        {
          title: 'Siema',
          content: 'https://o2.pl',
          published: true,
        },
      ],
    },
  },
];

async function main() {
  console.log('Start seeding...');
  for (const u in userData) {
    const user = await prisma.user.create({
      data: u,
    });

    console.log(`Created user with id: ${user.id}`);
  }
  console.log('Seeding finished');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
