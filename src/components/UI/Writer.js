import React, { useState } from "react";
import "./Writer.css";
import { useSpring, animated } from "react-spring";

const Writer = (props) => {
  const [index, setIndex] = useState(1);
  const [wordIndex, setWordIndex] = useState(0);
  const [flip, set] = useState(false);
  const [text, setText] = useState(" ");
  const { result } = useSpring({
    reset: true,
    reverse: flip,
    from: { result: "_" },
    result: text,
    delay: 200,
    onRest: () => {
      if (wordIndex + 1 > props.words.length) {
        setWordIndex(0);
        return;
      }
      if (flip) set(false);
      setIndex(index + 1);
      setText(props.words[wordIndex].substring(0, index));
      if (index > props.words[wordIndex].length) {
        set(true);
        setIndex(1);
        setWordIndex(wordIndex + 1);
      }
    },
  });

  return <animated.div className="console-container">{result}</animated.div>;
};
export default Writer;
