import './App.css'
import { EBox } from './components/EBox'
import { HeaderBar } from './components/HeaderBar'
import { SiderPanel } from './components/SiderPanel/index'

function App() {
  return (
    <div className="App">
      <main className="main">
        <header className="app-header">
          <HeaderBar mode="homepage-test" />
        </header>
        <section className="e-box-matrix">
          <EBox type="i_u" />
          <EBox type="i_nu" />
          <EBox type="ni_u" />
          <EBox type="ni_nu" />
        </section>
      </main>
      <aside className="app-sider">
        <SiderPanel />
      </aside>
    </div>
  )
}

export default App
