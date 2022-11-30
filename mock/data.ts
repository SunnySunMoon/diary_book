import { QuadrantEnum, RecordItem } from "../types/data";

export const MockRecordList: RecordItem[] = [
  {
    id: '1',
    content: '绑卡后置 - 联调',
    createdTime: 1669532106356,
    lastModifedTime: 1669532106356,
    labels: ['work', 'intergtrated debug'],
    isFinish: false,
    quadrant: QuadrantEnum.UrgentAndImportant
  },
  {
    id: '2',
    content: '面试题目准备',
    createdTime: 1669532206356,
    lastModifedTime: 1669532206356,
    labels: ['interview'],
    isFinish: false,
    quadrant: QuadrantEnum.UrgentAndImportant
  },
  {
    id: '3',
    content: 'Watch Zootopia+',
    createdTime: 1669532206356,
    lastModifedTime: 1669532206356,
    labels: ['entertain', 'plays', 'cartoon'],
    isFinish: false,
    quadrant: QuadrantEnum.NotUrgentAndUnimportant
  },
]