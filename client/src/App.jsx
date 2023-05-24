import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header>This is where you will include the navigation bar</header>

      <main>
        <Outlet/>
      </main>

      <footer>This is a footer</footer>
    </>
  )
}

export default App
