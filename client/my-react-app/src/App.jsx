import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TopNavBar from './components/TopNavBar';
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <TopNavBar />
    </div>
  )
}

export default App
