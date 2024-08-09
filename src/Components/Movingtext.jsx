// src/Components/Movingtext.jsx
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Movingtext = ({
  text = "Welcome to the mehran official trading platform , The mehran trading platform is a regular platform that continues to develop. We welcome you to join! ",
}) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(100% )" }, // Start outside the view
    to: { transform: "translate(-100%)" }, // Move to the left
    config: { duration: 13000 }, // Duration of the scroll
    reset: false,
    loop: true,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div className="overflow-hidden whitespace-nowrap w-full  bg-gray-900 text-gray-300  text-sm h-12 flex items-center font-bold ">
      <animated.div style={scrolling} className="inline-block mt-1.5">
        {text}
      </animated.div>
    </div>
  );
};

export default Movingtext;
