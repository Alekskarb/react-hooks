import './App.css';
import React, {useState} from "react";
import {useLocalStorage} from "./useLocalStorage";
import {useUpdateLogger} from "./useUpdateLogger";

function App() {
    const [value, setValue] = useLocalStorage('name', '');
    useUpdateLogger(value);
    return (
        <div className="App">
            <header className='App-header'>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            </header>
        </div>
    );
}

export default App;

// console.log('render')
// const [count, setCount] = useState(1);
//
// const decrease = () => {
//     // setCount(count - 1)
//     setCount(prevState => {
//         console.log('decrease1 - ', prevState)
//         return prevState - 1
//     })
//     setCount(prevState => {
//         console.log('decrease2 - ', prevState)
//         return prevState - 1
//     })
// }
// const increase = () => {
//     setCount(prevState => prevState + 1)
// }
//
// return (
//     <div className="App">
//         <p>{ count }</p>
//         <button onClick={decrease}>
//             <div><span>-</span></div>
//         </button>
//         <button onClick={increase}>
//             <div><span>+</span></div>
//         </button>
//     </div>
// );

// useSTATE

// console.log('render')
// const [count, setCount] = useState(1);
//
// const decrease = () => {
//     // setCount(count - 1)
//     setCount(prevState => {
//         console.log('decrease1 - ', prevState)
//         return prevState - 1
//     })
//     setCount(prevState => {
//         console.log('decrease2 - ', prevState)
//         return prevState - 1
//     })
// }
// const increase = () => {
//     setCount(prevState => prevState + 1)
// }
//
// return (
//     <div className="App">
//         <p>{ count }</p>
//         <button onClick={decrease}>
//             <div><span>-</span></div>
//         </button>
//         <button onClick={increase}>
//             <div><span>+</span></div>
//         </button>
//     </div>
// );