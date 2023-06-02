import { Message } from 'venom-bot'
import prisma from '../../lib/prisma'

export default async function GetUser(message: Message['sender']) {
  const { id, name, shortName } = message

  const userExist = await prisma.users.findUnique({
    where: {
      id,
    },
  })

  if (!userExist) {
    await prisma.users.create({
      data: {
        id,
        name,
        shortName,
      },
    })
  }

  const user = await prisma.users.findUnique({ where: { id } })

  return user
}
