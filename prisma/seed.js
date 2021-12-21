const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function seed() {
  const reading = [
    {
      email: "mike@mail.com",
    },
    {
      email: "nathan@mail.com",
    },
  ]

  const readPromises = reading.map(async read => {
    return await prisma.read.create({ data: read })
  })

  try {
    await Promise.all(readPromises)
  } catch (error) {
    console.error("[ERROR] Seeding read model: ", {
      code: error.code,
      error: error.message,
    })

    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

seed()