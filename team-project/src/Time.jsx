import { useDebugValue, useState } from "react"

function Time({name, age})
{
    const [text, setText] = useState("");
    const [input, setdsam] = useState("");
    const [backtest, setwetl] = useState("");
    const [log, settlxzk] = useState("");
    const [sadfkrk, setdljwe] = useState("");
    const [count, setCount] = useState(0);
    let number = 10;
    
    function reset()
    {
        setText("");
    }

    function handleOnChange(e)
    {
        setText(e.target.value)
    }

    function handlesetdsam(e)
    {
        setdsam(e.target.value)
    }
    
    function handlesetwetl(e)
    {
        setwetl(e.target.value)
    }

    function handlesettlxzk(e)
    {
        settlxzk(e.target.value)
    }

    function handlesetdljwe(e)
    {
        setdljwe(e.target.value)
    }

    function handlesCount(e)
    {
        setCount(count + number);
    }


    return (
        <div>
            <h2>제 이름은 {name}입니다.</h2>
            <h3>제 나이는 {age}입니다.</h3>
            <input value = {text} onChange = {handleOnChange}/>
            <button onClick={reset}>초기화</button>
            <input value = {input} onChange = {handleOnChange}/>
            <button onClick={reset}>초기화</button>
            <input value = {backtest} onChange = {handleOnChange}/>
            <button onClick={reset}>초기화</button>
            <input value = {log} onChange = {handleOnChange}/>
            <button onClick={reset}>초기화</button>
            <input value = {sadfkrk} onChange = {handleOnChange}/>
            <button onClick={reset}>초기화</button>
            <input value = {count} onChange = {handlesCount}/>
            <button onClick={reset}>초기화</button>
        </div>
    )
}
export default Time;