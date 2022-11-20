/**
 * Home side bar, navigator
 */
import { useState } from 'react'
import css from 'styled-jsx/css'
import TreeMenu from '../TreeMenu'
import { SideBarMenu } from '../TreeMenu/config'

export default function SideBar() {
  /** -------- States * Const -------- */
  const [isExpand, setExpand] = useState(true)

  /** -------- Handlers -------- */
  const toggleExpand = () => {
    setExpand(!isExpand)
  }
  return (
    <aside className={`side-bar ${isExpand ? '' : 'collapsed'}`}>
      <header />
      <section>
        <div className="toggle-controller" onClick={toggleExpand}>
          <div className="toggle-icon">{isExpand ? '<' : '>'}</div>
        </div>
      </section>
      <section>
        <TreeMenu list={SideBarMenu} level={1} />
      </section>
      <footer />
      <style jsx>{styles}</style>
    </aside>
  )
}

const styles = css`
  .side-bar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    background-color: #f5f2f0;
    transition: left 0.2s ease;
  }
  .toggle-controller {
    padding: 10px;
    display: flex;
    justify-content: right;
  }
  .toggle-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    cursor: pointer;
  }

  .collapsed {
    left: -250px;
    background-color: transparent;
  }
`