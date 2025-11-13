import React, { useState, useEffect, useRef } from 'react';
import useTimer from '../hooks/useTimer';
import './WorkoutTracker.css';

const WorkoutTracker = () => {
  const [sets, setSets] = useState([]);
  const [currentSet, setCurrentSet] = useState(1);
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [isResting, setIsResting] = useState(false);
  
  // Using custom useTimer hook for workout timer
  const workoutTimer = useTimer(0, false);
  
  // Using custom useTimer hook for rest timer
  const restTimer = useTimer(0, false);
  
  // useRef to store input focus
  const repsInputRef = useRef(null);
  
  // Auto-start rest timer when set is completed
  useEffect(() => {
    if (isResting && !restTimer.isRunning) {
      restTimer.start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResting]);

  // Auto-reset rest timer at 60 seconds
  useEffect(() => {
    if (restTimer.time >= 60) {
      handleRestComplete();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restTimer.time]);

  const handleAddSet = (e) => {
    e.preventDefault();
    
    if (!reps || !weight) {
      alert('Please enter both reps and weight');
      return;
    }

    const newSet = {
      id: Date.now(),
      setNumber: currentSet,
      reps: parseInt(reps),
      weight: parseFloat(weight),
      duration: workoutTimer.time,
    };

    setSets([...sets, newSet]);
    setCurrentSet(currentSet + 1);
    setReps('');
    setWeight('');
    setIsResting(true);
    
    // Focus back on reps input
    if (repsInputRef.current) {
      repsInputRef.current.focus();
    }
  };

  const handleRestComplete = () => {
    setIsResting(false);
    restTimer.reset();
    alert('Rest period complete! Ready for next set.');
  };

  const handleSkipRest = () => {
    setIsResting(false);
    restTimer.reset();
  };

  const handleStartWorkout = () => {
    workoutTimer.start();
  };

  const handlePauseWorkout = () => {
    workoutTimer.pause();
  };

  const handleResetWorkout = () => {
    if (window.confirm('Are you sure you want to reset the entire workout?')) {
      setSets([]);
      setCurrentSet(1);
      setReps('');
      setWeight('');
      setIsResting(false);
      workoutTimer.reset();
      restTimer.reset();
    }
  };

  const handleDeleteSet = (id) => {
    setSets(sets.filter(set => set.id !== id));
  };

  return (
    <div className="workout-tracker">
      <div className="workout-header">
        <h2> Workout Tracker</h2>
        <div className="workout-timer">
          <h3>Total Workout Time: {workoutTimer.formatTime()}</h3>
          <div className="timer-controls">
            {!workoutTimer.isRunning ? (
              <button onClick={handleStartWorkout} className="btn btn-success">
                Start Workout
              </button>
            ) : (
              <button onClick={handlePauseWorkout} className="btn btn-warning">
                Pause
              </button>
            )}
            <button onClick={handleResetWorkout} className="btn btn-danger">
              Reset Workout
            </button>
          </div>
        </div>
      </div>

      {isResting && (
        <div className="rest-timer">
          <h3>Rest Timer: {restTimer.formatTime()} / 01:00</h3>
          <div className="rest-progress">
            <div 
              className="rest-progress-bar" 
              style={{ width: `${(restTimer.time / 60) * 100}%` }}
            ></div>
          </div>
          <button onClick={handleSkipRest} className="btn btn-secondary">
            Skip Rest
          </button>
        </div>
      )}

      <form onSubmit={handleAddSet} className="set-form">
        <h3>Set #{currentSet}</h3>
        <div className="form-group">
          <label htmlFor="reps">Reps:</label>
          <input
            ref={repsInputRef}
            type="number"
            id="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="Enter reps"
            min="1"
            disabled={isResting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight"
            min="0"
            step="0.5"
            disabled={isResting}
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary" 
          disabled={isResting || !workoutTimer.isRunning}
        >
          Complete Set
        </button>
      </form>

      <div className="sets-list">
        <h3>Completed Sets ({sets.length})</h3>
        {sets.length === 0 ? (
          <p className="empty-message">No sets completed yet. Start your workout!</p>
        ) : (
          <table className="sets-table">
            <thead>
              <tr>
                <th>Set</th>
                <th>Reps</th>
                <th>Weight</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sets.map((set) => (
                <tr key={set.id}>
                  <td>#{set.setNumber}</td>
                  <td>{set.reps}</td>
                  <td>{set.weight} kg</td>
                  <td>{Math.floor(set.duration / 60)}:{(set.duration % 60).toString().padStart(2, '0')}</td>
                  <td>
                    <button 
                      onClick={() => handleDeleteSet(set.id)} 
                      className="btn btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default WorkoutTracker;
