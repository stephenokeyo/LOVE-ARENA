const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient()

async function main() {
  const email = 'stephenokeyo016@gmail.com'
  const plainPassword = 'Stephen@12k'
  const hashedPassword = await bcrypt.hash(plainPassword, 10)

  await prisma.user.upsert({
    where: { email },
    update: {
      password: hashedPassword,
      isAdmin: true,
      name: 'Stephen Okeyo',
    },
    create: {
      email,
      password: hashedPassword,
      name: 'Stephen Okeyo',
      age: 30,
      gender: 'male',
      bio: 'Admin user',
      country: 'Kenya',
      phone: '+254700000000',
      isAdmin: true,
    },
  })

  const user = await prisma.user.findUnique({ where: { email }, select: { id: true, email: true, isAdmin: true } })
  console.log('Admin user set:', user)

  await prisma.$disconnect()
}

main().catch((e) => {
  console.error(e)
  prisma.$disconnect()
  process.exit(1)
})