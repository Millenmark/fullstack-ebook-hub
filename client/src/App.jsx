import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components'

function App() {

  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>This is a footer</footer>
    </>
  )
}

export default App
