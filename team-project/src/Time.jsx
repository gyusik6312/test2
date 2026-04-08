import { useDebugValue, useState } from "react"

function Time({name, age})
{
    const [text, setText] = useState("");

    function reset()
    {
        setText("");
    }

    function handleOnChange(e)
    {
        setText(e.target.value)
    }

    return (
        <div>
            <h2>제 이름은 {name}입니다.</h2>
            <h3>제 나이는 {age}입니다.</h3>
            <input value = {text} onChange = {handleOnChange}/>
            <button onClick={reset}>초기화</button>
        </div>
    )
}
export default Time;