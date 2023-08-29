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
               <p>{value}</p>
                <button> toggle </button>
                <button> set true </button>
                <button> set false </button>
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
// work with USE-STATE 1

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

// work with USE-EFFECT 3

// function App2() {
//     useEffect(() => {
//         console.log('App-2: componentDidMount')
//
//         return () => {
//             console.log('App-2: componentWillUnmount')
//         }
//     }, []);
//     return (
//         <>
//             <h2>title!!</h2>
//             <App3/>
//         </>
//     )
// }
//
// function App3() {
//     useEffect(() => {
//         console.log('App-3: componentDidMount')
//         return () => {
//             console.log('App-3: componentWillUnmount')
//         }
//     }, []);
//     return (
//         <>
//             <h2>title!2222</h2>
//         </>
//     )
// }
//
// function App() {
//     // console.log('render')
//     const [count, setCount] = useState(1);
//     const [visible, setVisible] = useState(false);
//
//     useEffect(() => {
//         console.log('Subscribe Count!')
//         return () => {
//             console.log('UnSubscribe Count!')
//         }
//     }, [count]);
//
//     // useEffect(() => {
//     //     console.log('App: componentDidMount')
//     // }, []);
//     // useEffect(() => {
//     //     console.log('App: componentWillUpdate')
//     // });
//     // useEffect(() => {
//     //     console.log('visible changed!')
//     // }, [visible, count]);
//
//     return (
//         <div className="App">
//             <p>{count}</p>
//             <button onClick={() => setCount(s => s + 1)}>
//                 <div><span>+</span></div>
//             </button>
//             <button onClick={() => setVisible(v => !v)}>
//                 <div><span>hide</span></div>
//             </button>
//             {
//                 visible && <App2/>
//             }
//         </div>
//
//     );

// work with USE-LAYOUT-EFFECT 4

// function App2() {
//     useEffect(() => {
//         console.log('App-2: componentDidMount')
//
//         return () => {
//             console.log('App-2: componentWillUnmount')
//         }
//     }, []);
//     return (
//         <>
//             <h2>title!!</h2>
//         </>
//     )
// }

// const [visible, setVisible] = useState(false);
//
// useLayoutEffect(() => {
//     if (!visible) {
//         return;
//     }
//     const btn = document.getElementById('btn');
//     const {bottom} = document.getElementById('box');
//     const clientRect = btn.getBoundingClientRect();
//     btn.style.top = `${bottom + 25}px`
//     console.log('getBoundingClientRect: ', clientRect);
//
// }, [visible]);
//
// useEffect(() => {
//     console.log('useEffect-1')
// }, []);
//
// useEffect(() => {
//     console.log('useEffect-2')
// }, []);
//
// useLayoutEffect(() => {
//     console.log('useLayoutEffect-2')
// }, []);
//
// useLayoutEffect(() => {
//     console.log('useLayoutEffect-1')
//
// }, []);
//
// const style = {
//     background: 'black',
//     position: 'relative',
//     top: '10px'
// }
//
// return (
//     <div className="App">
//         <button id="btn" onClick={() => setVisible(v => !v)}>
//             <div><span>{visible ? "Hide" : "Show"}</span></div>
//         </button>
//         {
//             visible && <div id="box" style={style}><App2/></div>
//         }
//     </div>
//
// );

// work with USE-REF 5

// const [count, setCount] = useState(0);
// const countRef = useRef(0);
// const linkRef = useRef(null);
// console.log('useRef: ',count, "|", countRef)
// console.log('node DOM: ', linkRef)
//
// const handler = () => {
//     linkRef.current.style.padding = `${linkRef.current.style.padding + 10}px`
// }
//
// return (
//     <div className="App">
//         <p>
//             {count}
//         </p>
//         <button id="btn" onClick={() => setCount(v => v + 1)}>
//             Count
//         </button>
//         <p ref={linkRef} >
//             {countRef.current}
//         </p>
//         <button onClick={() => countRef.current = countRef.current + 1}>
//             Count REF
//         </button>
//         <button onClick={handler}>
//             SET
//         </button>
//     </div>

// work with USE-MEMO 6

// const [number, setNumber] = useState(0);
// const [dark, setDark] = useState(false);
// const double = useMemo(() => {
//     return slowMotion(number)
// }, [number]);
//
// const themeDark = {
//     backgroundColor: dark ? 'black' : 'White',
//     color: dark ? 'White' : 'black',
// }
//
// return (
//     <div className="App" style={themeDark}>
//         <input type="number" value={number}
//                onChange={e => {
//                    setNumber(parseInt(e.target.value))
//                }}/>
//         <button onClick={() => setDark(d => !d)}>set Theme</button>
//         <p>
//             {double}
//         </p>
//     </div>
// );

// work with USE-CALLBACK 7

// function List({getItems}) {
//     const [items, setItems] = useState([]);
//     useEffect(() => {
//         console.log('useEffect - getItems')
//         setItems(getItems(10));
//     }, [getItems]);
//     return (
//         <ul>
//             {items.map(i => <li key={i}>{i}</li>)}
//         </ul>
//     )
// }
//
// function App() {
//     const [number, setNumber] = useState(0);
//     const [dark, setDark] = useState(false);
//
//     const themeDark = {
//         backgroundColor: dark ? 'black' : 'White',
//         color: dark ? 'White' : 'black',
//     }
//
//     const getItems = useCallback((inc) => {
//         return [number + inc, number + 1 + inc, number + 2 + inc]
//     }, [number]);
//
//     return (
//         <div className="App" style={themeDark}>
//             <input type="number" value={number}
//                    onChange={e => {
//                        setNumber(parseInt(e.target.value))
//                    }}/>
//             <button onClick={() => setDark(d => !d)}>set Theme</button>
//             <p>
//                 <List getItems={getItems}/>
//             </p>
//         </div>
//     );
// }

// work with USE-TRANSITION 8

// let LIST_SIZE = 20000;
//
// function App() {
//     const [input, setInput] = useState('');
//     const [list, setList] = useState([]);
//     const [isTransition, startTransition] = useTransition()
//
//     const handle = (e) => {
//         setInput(e.target.value)
//         startTransition(() => {
//             const l = []
//             for (let i = 0; i < LIST_SIZE; i++) {
//                 l.push(e.target.value)
//             }
//             setList(l);
//         })
//     }
//     return (
//         <div className="App">
//             <input type="text" value={input}
//                    onChange={handle}/>
//             <div>
//                 {isTransition ? "Loading.." : list.map((item, i) => <div key={i}> {item} </div>)}
//             </div>
//         </div>
//     );
// }

// work with USE-DeferredValue 9

// let LIST_SIZE = 20000;
//
// function List({input}) {
//     const deferredInput = useDeferredValue(input);
//     console.log('input: ', input);
//     console.log('deferredInput: ', deferredInput);
//     const list = useMemo(() => {
//         const l = []
//         for (let i = 0; i < LIST_SIZE; i++) {
//             l.push(<div key={i}>{input}</div>)
//         }
//         return l
//     }, [deferredInput])
//
//     return (
//         <ul>
//             {list}
//         </ul>
//     )
// }
//
// List.propTypes = {input: PropTypes.string};
//
// function App() {
//     const [input, setInput] = useState('');
//     const handle = (e) => {
//         setInput(e.target.value)
//     }
//     return (
//         <div className="App">
//             <input type="text" value={input}
//                    onChange={handle}/>
//             <div>
//                 <List input={input}/>
//             </div>
//         </div>
//     );
// }

// create OWN HOOK useLocalStorage & useUpdateLogger

// function App() {
//     const [value, setValue] = useLocalStorage('name', '');
//     useUpdateLogger(value);
//     return (
//         <div className="App">
//             <header className='App-header'>
//                 <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
//             </header>
//         </div>
//     );
// }
