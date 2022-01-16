import React, { useState, useEffect }  from 'react'
import {useNavigate} from 'react-router-dom'
import './HighScore.css'





const Highscore = () => {
    let navigate = useNavigate();
    const[isHighscoreEmpty, setIsHighscoreEmpty] = useState(true);
    const highScore = JSON.parse(localStorage.getItem("highScores")) || [];
    const clearHighScore = () =>{
        localStorage.setItem("highScores", JSON.stringify([]));
        setIsHighscoreEmpty(true);
    }
    useEffect(() => {
        setIsHighscoreEmpty(highScore.length === 0 ? true : false);
    });
   
    
    return (

        <div className="container-fluid">
            <div className="card" >
                <div className="card-body">
                        <h2 className="card-title">HighScores</h2>
                        <div className='highscores'>
                            { isHighscoreEmpty ? `NO HIGHSCORES YET` : highScore.map((highScore, number = 0) => (
                                <div key={highScore.id}>
                                    {`${number+1}. ${highScore.name} : ${highScore.highscore}`}
                                </div>
                            ))} 
                        </div>
                        <div className='btn-holder'>
                            <button className='btn-back btn btn-primary' onClick={() => navigate("/") }>GO BACK</button>
                            <button className='btn-clear btn btn-primary' onClick={clearHighScore}>CLEAR HIGHSCORE</button>
                        </div>
                        
                </div>
            </div>
        </div> 
        
    )
}

export default Highscore;