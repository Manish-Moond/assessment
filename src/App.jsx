import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.scss'
import HeaderComponent from './components/headerComponent'
import MainComponent from './components/mainComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
}

export default App
