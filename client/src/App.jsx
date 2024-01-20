import { useState } from 'react'
import TopNavBar from './components/TopNavBar';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReviewItem from './components/ReviewItem';
import ProfessorReviewPage from './pages/ProfessorReviewPage';
import { ProfessorForm } from './components/forms/ProfessorForm';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="app-container">
      <TopNavBar className="nav_main"/>
      <div className="submit_review">
        <ProfessorForm/>
      </div>
    </div>
  )
}

export default App
