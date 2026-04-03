const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Set alice as admin
  await prisma.user.update({
    where: { email: 'alice@usa.com' },
    data: { isAdmin: true }
  })
  const users = await prisma.user.findMany({ select: { email: true, isAdmin: true } })
  console.log('Updated Users:', users)
  await prisma.$disconnect()
}

main().catch((e) => {
  console.error(e)
  prisma.$disconnect()
  process.exit(1)
})