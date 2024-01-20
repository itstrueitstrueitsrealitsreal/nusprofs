import { useState } from 'react'
import TopNavBar from '../components/TopNavBar';
import './ProfessorReviewPage.css'

function ProfessorReviewPage() {
  const [count, setCount] = useState(0)
  console.log("ProfessorReviewPage.jsx called")
  // get the prof average quality of teaching score
  return (
    <div className="page-container">
      <TopNavBar />
      <div className="container">
        <div className="left-box">
          //display prof's name and prof's average quality of teaching score
        </div>
        <div className="right-box">
          //display list of reviews of prof
        </div>
      </div>
    </div>
  )
}

export default ProfessorReviewPage
