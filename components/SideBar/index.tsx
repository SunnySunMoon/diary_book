/**
 * Home side bar, navigator
 */
import { useState } from 'react'
import css from 'styled-jsx/css'

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
    background-color: lightgray;
    transition: left 0.3s ease;
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
    color: #fff;
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .collapsed {
    left: -250px;
  }
`