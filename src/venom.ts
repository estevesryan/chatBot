import { create, Whatsapp } from 'venom-bot'

create({
  session: 'degust',
})
  .then((client) => start(client))
  .catch((error) => console.error(error))

export async function start(client: Whatsapp) {
  client.onMessage((messsage) => {
    if (messsage.isGroupMsg === true && messsage.type === undefined) {
      return null
    }
  })
}
