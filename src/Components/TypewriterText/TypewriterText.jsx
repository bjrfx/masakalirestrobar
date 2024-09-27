import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterText = ({ lines }) => {
  return (
    <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', color: 'white' }}>
      <Typewriter
        words={lines}
        loop={0} // 0 for infinite loop
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
};

export default TypewriterText;