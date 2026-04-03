import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10)

  const users = [
    {
      email: 'alice@usa.com',
      name: 'Alice Johnson',
      age: 28,
      gender: 'female',
      bio: 'Love hiking and coffee',
      country: 'USA',
      phone: '+1-555-0101',
      isAdmin: true,
    },
    {
      email: 'bob@uk.com',
      name: 'Bob Smith',
      age: 32,
      gender: 'male',
      bio: 'Tech enthusiast',
      country: 'UK',
      phone: '+44-20-7946-0123',
    },
    {
      email: 'carol@canada.com',
      name: 'Carol Williams',
      age: 26,
      gender: 'female',
      bio: 'Artist and traveler',
      country: 'Canada',
      phone: '+1-416-555-0147',
    },
    {
      email: 'david@australia.com',
      name: 'David Brown',
      age: 30,
      gender: 'male',
      bio: 'Surfer and musician',
      country: 'Australia',
      phone: '+61-2-5550-1234',
    },
    {
      email: 'emma@germany.com',
      name: 'Emma Davis',
      age: 27,
      gender: 'female',
      bio: 'Book lover',
      country: 'Germany',
      phone: '+49-30-12345678',
    },
    {
      email: 'frank@france.com',
      name: 'Frank Miller',
      age: 35,
      gender: 'male',
      bio: 'Chef and wine expert',
      country: 'France',
      phone: '+33-1-42-86-00-00',
    },
    {
      email: 'grace@japan.com',
      name: 'Grace Wilson',
      age: 24,
      gender: 'female',
      bio: 'Anime fan',
      country: 'Japan',
      phone: '+81-3-1234-5678',
    },
    {
      email: 'henry@brazil.com',
      name: 'Henry Moore',
      age: 29,
      gender: 'male',
      bio: 'Football lover',
      country: 'Brazil',
      phone: '+55-11-1234-5678',
    },
    {
      email: 'isabella@italy.com',
      name: 'Isabella Taylor',
      age: 31,
      gender: 'female',
      bio: 'Fashion designer',
      country: 'Italy',
      phone: '+39-06-12345678',
    },
    {
      email: 'jack@india.com',
      name: 'Jack Anderson',
      age: 33,
      gender: 'male',
      bio: 'Yoga instructor',
      country: 'India',
      phone: '+91-11-12345678',
    },
  ]

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        ...user,
        password: hashedPassword,
      },
    })
  }

  // Create admin user
  const adminPassword = await bcrypt.hash('Stephen@12k', 10)
  await prisma.user.upsert({
    where: { email: 'stephenokeyo016@gmail.com' },
    update: {},
    create: {
      email: 'stephenokeyo016@gmail.com',
      password: adminPassword,
      name: 'Stephen Okeyo',
      age: 30,
      gender: 'male',
      bio: 'Administrator',
      country: 'Kenya',
      phone: '+254-700-000000',
      isAdmin: true,
    },
  })

  console.log('Seeded 10 users and 1 admin')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })