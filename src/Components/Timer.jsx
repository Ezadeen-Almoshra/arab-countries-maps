import React, { useEffect, useState } from 'react'

const Timer = ({ setTimeLeft, timeLeft }) => {
  // Initial state: 4 minutes (240 seconds)
  

  useEffect(() => {
    if (timeLeft <= 0) return;
    // Save interval ID to clear it later
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = prevTimeLeft - 1;
        localStorage.setItem("timeLeft", newTimeLeft);
        return newTimeLeft;
      });
    }, 1000);

    // Clear interval on component unmount or when timer reaches 0
    return () => clearInterval(intervalId);
  }, [timeLeft, setTimeLeft]);

  // Calculate minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  

  return (
    <div>
      <div className="text-center mt-2">
        <div className="text-4xl font-bold">
          {minutes}: 
          <span className={` ${seconds && "animate-ping"}`}>
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer