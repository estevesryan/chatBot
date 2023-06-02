import { Message } from 'venom-bot'
import prisma from '../../lib/prisma'
import GetUser from '../users/users'

export default async function GetHistory(Message: Message, botReply: string) {
  const user: any = await GetUser(Message.sender)

  const histories = await prisma.history.create({
    data: {
      userMessage: Message.body,
      systemMessage: botReply,
      usersId: user.id,
    },
  })

  return histories
}
