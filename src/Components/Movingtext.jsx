import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { FaBell } from "react-icons/fa";

const Movingtext = ({
  text = "Welcome to the mehran official trading platform , The mehran trading platform is a regular platform that continues to develop. We welcome you to join! ",
}) => {
  const [key, setKey] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  const scrolling = useSpring({
    from: { transform: "translate(100% )" },
    to: { transform: "translate(-100%)" },
    config: { duration: 13000 },
    reset: false,
    loop: true,
    onRest: () => {
      setKey(key + 1);
    },
  });

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <div
        className="overflow-hidden whitespace-nowrap w-full bg-gray-900 text-gray-300 text-sm h-12 flex items-center font-bold cursor-pointer hover:bg-gray-800 transition-colors duration-300"
        onClick={handleClick}
      >
        <animated.div style={scrolling} className="inline-block mt-1.5">
          {text}
        </animated.div>
      </div>
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-lg shadow-2xl transform transition-transform duration-300 scale-105 max-w-md w-96 p-6">
            <div className="flex ">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Notification
              </h2>
              <div className="mt-1 ml-2 text-xl text-orange-300">
                <FaBell />
              </div>
            </div>
            <p className="text-gray-600 italic leading-relaxed">{text}</p>
            <button
              className="mt-6 w-28 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleClick}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movingtext;
