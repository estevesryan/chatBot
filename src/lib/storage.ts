import { STAGES } from '../stages/Stages'
import { IStorage } from '../storage'

export const Storage: IStorage[] = []

export default class CreateStorage {
  exec({ client, stage, message }: IStorage) {
    const storage = {
      client,
      message,
      stage,
    }

    Storage.push(storage)

    return storage
  }
}

export function getStorage(user: string, message: string) {
  const client = user
  const existStorage = Storage.find((storage) => client === storage.client)
  const createStorage = new CreateStorage()

  if (!existStorage) {
    const storage = createStorage.exec({
      client,
      message,
      stage: STAGES.INICIAL,
    })

    return storage
  }

  return existStorage
}
