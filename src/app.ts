import { create, Whatsapp } from 'venom-bot'
import { getStorage } from './lib/storage'
import { stages } from './stages/Stages'

create({
  session: 'degust',
})
  .then((client) => start(client))
  .catch((error) => console.error(error))

export async function start(client: Whatsapp) {
  client.onMessage((messsage) => {
    if (messsage.isGroupMsg === true && messsage.type === undefined) return null

    const storage = getStorage(messsage.from, messsage.body)
    const currentStage = Number(storage.stage)

    stages[currentStage].stage.exec(storage, client)

    return console.log(currentStage, storage)
  })
}
