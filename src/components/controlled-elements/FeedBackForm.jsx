import React from 'react'
import {useState} from 'react'
function FeedBackForm() {
    const [score, setScore] = useState('10');
    const [comment, setComment] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      if (Number(score) <= 5 && comment.length <= 10) {
        alert("please provide a comment explaining why the experience was poor.")
        return;
      }
      setComment("");
      setScore("10");
  
    }
    return (
      <div className='App'>

        <form onSubmit={handleSubmit} className='formContainer'>
          <fieldset>
            <div className='Field'>
              <div>
                <h2>FeedBack form </h2>
                <label htmlFor='inputRange'>Score: {score}⭐</label>
                <div  >
                  <input
                    className='inputRange'
                    id='inputRange'
                    type='range'
                    min={0}
                    max={10}
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                  />
  
                </div>
                <div>
                  <label htmlFor='textareaField'>Comment: </label>
                  <div>
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} className='textareaField' id='textareaField'></textarea>
                  </div>
                </div>
              </div>
              <input type='submit' value={'Submit'} className='submitBtn' />
            </div>
            <p>Version 1.1</p>
        {/* to distingiuesh it from the one created inside the 'App.js', which is version 1.0) */}
        {/* this is a comment's format so wierd for me */}
          </fieldset>
        </form>
      </div>
    );
}

export default FeedBackForm