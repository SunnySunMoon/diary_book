/** 级连组件 */

import css from "styled-jsx/css"

export interface TreeItem {
  id: string | number // unique identifier
  value: string
  extra?: Record<string, any>
  children?: TreeItem[]
}

interface Props {
  list?: TreeItem[],
  level?: number // deep
}
export default function TreeMenu(props: Props) {
  const list = props?.list || []
  const level = props?.level || 1
  return (list.length > 0 ?
    (<div className={`tree-group tree-level-${level}`}>{list.map(item => (
      <div className="tree-item" key={item.id?.toString()}>
        <div className="tree-item-value">{item.value}</div>
        <TreeMenu list={item.children} level={level + 1} />
      </div>
    ))}
    <style jsx>{styles}</style>
    </div>) : null
  )
}

const styles = css`
  .tree-group {
    margin-top: 12px;
    padding-left: 20px;
  }
`