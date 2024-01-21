// ReviewItem.jsx
import React from 'react';

const timePosted = "01/01/2024";
const quality = 4;
const module = "CS2040";
const acadYear = "AY23/24";
const content = "Prof explained the concepts well!"

const ReviewItem = ({ review }) => {
  const {
    module,
    quality,
    difficulty,
    content,
    timePosted,
  } = review;

  

  return (
    <div className="card-content">
      <div>
        <strong style={{ color: 'black' }}>Date posted: {date}</strong>
      </div>
      <div>
        <strong style={{ color: 'black' }}>Quality of Teaching: {qualityTeaching}/5</strong>
      </div>
      <div>
        <strong style={{ color: 'black' }}>Department: {department}</strong>
      </div>
      <div>
        <strong style={{ color: 'black' }}>Module Code: {moduleCode}</strong>
      </div>
      <div>
        <strong style={{ color: 'black' }}>Academic Year: {moduleCode}</strong>
      </div>
      <div>
        <strong style={{ color: 'black' }}>Difficulty of Module: {difficultyModule}/5</strong>
      </div>
      <div>
        <strong style={{ color: 'black' }}>Comments: {comments}</strong>
      </div>
   </div>
  );
};

export default ReviewItem;
