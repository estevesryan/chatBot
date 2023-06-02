import { Whatsapp } from 'venom-bot'
import { IStorage } from '../storage'
import { STAGES } from './Stages'

export const inintialStage = {
  async exec(storage: IStorage, client: Whatsapp) {
    storage.stage = STAGES.MENU

    const msg = `
      👋 Olá, como vai?
      Eu sou Carlos, o *assistente virtual* da Degust.
      *Posso te ajudar?* 🙋‍♂️
      -----------------------------------
      1️⃣ - FAZER PEDIDO
      2️⃣ - VERIFICAR TAXA DE ENTREGA
      0️⃣ - FALAR COM ATENDENTE
    `

    await client.sendText(storage.client, msg)
  },
}
