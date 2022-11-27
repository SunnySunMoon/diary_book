/**
 * Main Data Structure Define
 */



export interface RecordItem {
  id: string
  content: string
  createdTime: number
  lastModifedTime: number
  labels: string[]
  isFinish: boolean
  quadrant: QuadrantEnum
}
export enum QuadrantEnum {
  UrgentAndImportant,
  UrgentButUnimportant,
  NotUrgentButImportant,
  NotUrgentAndUnimportant
}