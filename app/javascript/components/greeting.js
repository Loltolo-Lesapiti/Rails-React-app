import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const message = useSelector((state) => state.greetings.greating);

  return (
    <div>
      <p>Refresh the page to display other greetings</p>
      <h1>{message}</h1>
    </div>
  );
};

export default Greeting;