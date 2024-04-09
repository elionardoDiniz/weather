import React, { useState } from 'react';

const Clock = () =>{
  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);


  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(UpdateTime);
  return(
    <>
      {ctime}
    </>
  )

    
}

export default Clock;