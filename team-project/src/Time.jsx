import { useDebugValue, useState } from "react"

function Time({name, age})
{
    const [text, setText] = useState("");
    const [count, setCount] = useState("");
    const [backtest, setwetl] = useState("");
    const [log, settlxzk] = useState("");
    const [value, setValue] = useState("");
    const [serch, setSearch] = useState("");
    const [sadfkrk, setdljwe] = useState("");
    const [box, setBox] = useState("");
    const [test, setTest] = useState("");

    let number = 0;
    const num = true;

    function reset()
    {
        setText("");
    }

    function handlesetValue(e)
    {
        setValue(e.target.value)
    }

    function handlesettlxzk(e)
    {
        settlxzk(e.target.value)
    }

    function handlesetBox(e)
    {
        setBox(e.target.value)
    }

    function handlesetwetl(e)
    {
        setwetl(e.target.value)
    }

    function handleOnChange(e) {
    setText(e.target.value);
    }
    

    return (
        <div>
            <h2>제 이름은 {name}입니다.</h2>
            <h3>제 나이는 {age}입니다.</h3>
            <input value = {text} onChange = {handleOnChange}/>
            <button onClick={reset}>초기화</button>
            <input value = {text} onChange = {handleOnChange}/>
            <button onClick={reset}>초기화</button>
            <input value = {text} onChange = {handleOnChange}/>
            <button onClick={reset}>초기화</button>
            <h3>제 나이는 {age}입니다.</h3>
            <input value = {text} onChange = {handleOnChange}/>
            <button onClick={reset}>초기화</button>
            <h3>제 성별은 {age}입니다.</h3>
        </div>
    )
}
export default Time;