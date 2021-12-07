
import React, { useState, useEffect, useRef } from 'react';
// import './commercial.scss';


// export default function Commercial() {
//     const [count, setCount] = useState(0);
//     const intervalRef = React.useRef();
//     // const callbackRef = React.useRef();
//     // const intervalRef = useInterval(() => {
//     //     if (time < 10) {
//     //       setTime(time + 1);
//     //     } else {
//     //       window.clearInterval(intervalRef.current);
//     //     }
//     //   }, isPaused ? null : 1000);

//     useEffect(() => {
//         setInterval(() => {
//             console.log('once');
//             setCount(count + 1);
//         }, 1000);
//     }, [])
//     return (
//         <div className="commericial--wrapper">
//             I'm commercial
//             {count}
//         </div>
//     )
// }

function useInterval(callback: any, delay: any) {
    const intervalRef = React.useRef();
    const callbackRef = React.useRef(callback);

    // Remember the latest callback:
    //
    // Without this, if you change the callback, when setInterval ticks again, it
    // will still call your old callback.
    //
    // If you add `callback` to useEffect's deps, it will work fine but the
    // interval will be reset.

    React.useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    // Set up the interval:

    React.useEffect(() => {
        if (typeof delay === 'number') {
            // @ts-ignore
            intervalRef.current = window.setInterval(() => callbackRef.current(), delay);

            // Clear interval if the components is unmounted or the delay changes:
            return () => window.clearInterval(intervalRef.current);
        }
    }, [delay]);

    // Returns a ref to the interval ID in case you want to clear it manually:
    return intervalRef;
}


const Clock = () => {
    const [time, setTime] = React.useState(0);
    const [isPaused, setPaused] = React.useState(false);

    const intervalRef = useInterval(() => {
        if (time < 10) {
            setTime(time + 1);
        } else {
            window.clearInterval(intervalRef.current);
        }
    }, isPaused ? null : 1000);

    return (<React.Fragment>
        <button onClick={() => setPaused(prevIsPaused => !prevIsPaused)} disabled={time === 10}>
            {isPaused ? 'RESUME ⏳' : 'PAUSE '}
        </button>

        <p>{time.toString().padStart(2, '0')}/10 sec.</p>
        <p>setInterval {time === 10 ? 'stopped.' : 'running...'}</p>
    </React.Fragment>);
}
export default Clock;
//   return Clocl
//   ReactDOM.render(<Clock />, document.querySelector('#app'));