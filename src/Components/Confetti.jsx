import React from 'react'
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
const Win = () => {
  
  return (
    <div className="flex justify-center items-center">
      <Confetti width={250} height={250} className='w-full' />
    </div>
  );
};

export default Win;