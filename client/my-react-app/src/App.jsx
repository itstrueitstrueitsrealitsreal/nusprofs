import { useState } from 'react'
import TopNavBar from './components/TopNavBar';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReviewItem from './components/ReviewItem';
import ProfessorReviewPage from './pages/ProfessorReviewPage';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="app-container">
      <TopNavBar />
    </div>
  )
}

export default App
