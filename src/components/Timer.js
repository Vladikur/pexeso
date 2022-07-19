import { useState, useEffect } from 'react';

const Timer = ({ restart }) => {
    const [over, setOver] = useState(false);
    const [[m, s], setTime] = useState([0, 0]);

    const tick = () => {
        if (over) return;

        if(s === 59) {
            setTime([m + 1, 0])
        } else {
            setTime([m, s + 1])
        }
    };

    const reset = () => {
        restart()
        setTime([parseInt(0), parseInt(0)]);
        setOver(false);
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <div>
            <p>{`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
            <button onClick={reset}>Restart</button>
        </div>
    )
}

export default Timer;