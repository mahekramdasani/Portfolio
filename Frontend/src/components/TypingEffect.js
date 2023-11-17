import React, { useState, useEffect, useRef, useMemo } from 'react';
import {PiHandWavingFill} from 'react-icons/pi';

const TypingEffect = () => {
  const [text, setText] = useState('');

  const phrases = useMemo(() => ["I'm a Java Enthusiast",
  "Exploring the world of Data Science.",
  "Building skills in Full Stack development."], []);
  const speed = 50; // Adjust the speed (milliseconds per character)
  const delayBeforeTypingNextPhrase = 1500; // Adjust the delay before typing the next phrase (milliseconds)

  const currentIndexRef = useRef(0);

  useEffect(() => {
    let isMounted = true;

    const type = async () => {
      const currentPhrase = phrases[currentIndexRef.current];

      // Typing
      for (let i = 0; i <= currentPhrase.length; i++) {
        if (!isMounted) return;

        setText(currentPhrase.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, speed));
      }

      // Pause before deleting
      await new Promise(resolve => setTimeout(resolve, delayBeforeTypingNextPhrase));

      // Deleting
      for (let i = currentPhrase.length; i >= 0; i--) {
        if (!isMounted) return;

        setText(currentPhrase.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, speed));
      }

      // Pause before typing the next phrase
      await new Promise(resolve => setTimeout(resolve, delayBeforeTypingNextPhrase));

      currentIndexRef.current = (currentIndexRef.current + 1) % phrases.length;

      type(); // Start typing the next phrase
    };

    type();

    return () => {
      isMounted = false; // Cleanup to prevent memory leak
    };
  }, [phrases, speed, delayBeforeTypingNextPhrase]);

  return (
    <div className='type'>
        {/* <h1>&nbsp;Hello!<PiHandWavingFill/>My Name is</h1> */}
        <h1 className='name'>&nbsp;Mahek Ramdasani</h1>
      <h3>&nbsp;{text}</h3>
    </div>
  );
};

export default TypingEffect;
