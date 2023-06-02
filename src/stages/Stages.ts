import { inintialStage } from './inintial'
import { stageOne } from './stageOne'

export const STAGES = {
  INICIAL: '0',
  MENU: '1',
  CARRINHO: '2',
  RESUMO: '3',
  PEDIDO: '4',
  FALAR_COM_ATENDENTE: '5',
}

export const stages = [
  {
    description: 'Welcome',
    stage: inintialStage,
  },
  {
    description: 'Menu',
    stage: stageOne,
  },
]
