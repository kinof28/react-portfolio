import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import { useTypewriter } from 'react-simple-typewriter'

const Writer = (props) => {

    // const { text } = useTypewriter({
    //     words: ['Hello', 'From', 'Typewriter', 'Hook!'],
    //     loop: 0, // Infinit
    // })
    return (
        // <span>{text} </span>
        <Typewriter words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            // loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
        // <Typewriter
        //     words={['Eat', 'Sleep', 'Code', 'Repeat!']}
        //     loop={5}
        //     cursor
        //     cursorStyle='_'
        //     typeSpeed={70}
        //     deleteSpeed={50}
        //     delaySpeed={1000}
        // // onLoopDone={handleDone}
        // // onType={handleType}
        // />
    )
}
export default Writer;