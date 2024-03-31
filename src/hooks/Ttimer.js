import React, { useRef, useState } from "react";

const Timer = () => {
    const [startTime, setStartTime] = useState(60);
    const intervalRef = useRef(null);

    const beginTimer = (value) => {
        switch (value) {
            case "start":
                intervalRef.current = setInterval(() => {
                    setStartTime((prevTime) => prevTime - 1);
                }, 1000);
                break;
            case "end":
                clearInterval(intervalRef.current);
                break;
            case "reset":
                setStartTime(60)   
                break; 
            default:
                break;
        }
    };

    return (
        <>
            <h1>Timer</h1>
            <h2>{startTime}</h2>
            <button onClick={() => beginTimer("start")}>Start Timer</button>
            <button onClick={() => beginTimer("end")}>Stop Timer</button>
            <button onClick={() => beginTimer("reset")}>reset</button>
        </>
    );
};

export default Timer;
