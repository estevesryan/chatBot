import axios from 'axios'
import { IStorage } from '../storage'

const header = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer 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',
}

export default async function chatGPT(storage: IStorage) {
  await axios
    .post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'Se a mensagem for igual a 1 ou quero fazer um pedido me retorne o numero 1',
          },
          { role: 'user', content: storage.message },
        ],
      },
      { headers: header },
    )
    .then(async (response) => {
      const message = await response.data.choices[0].message.content

      console.log(message)
    })
}
