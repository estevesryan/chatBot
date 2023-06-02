import { Whatsapp } from 'venom-bot'
import { IStorage } from '../storage'
import chatGPT from '../chatGPT/chatGPT'

export const stageOne = {
  async exec(storage: IStorage, client: Whatsapp) {
    // const validMessage = /[1|2|3]/.test(storage.message)

    storage.message = chatGPT(storage)

    // const msg =
    //   '❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️'

    // if (!validMessage) {
    //   client.sendText(storage.client, msg)
    // }

    // console.log(validMessage)
  },
}

// const options = {
//   1: () => {
//     console.log('StageOne')
//   },
// }
