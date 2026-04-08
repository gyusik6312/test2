import React from "react";

function Even(props) {
    function handleOnClick(e) {
        console.log(e);
        console.log(e.target.name);
        alert("버튼을 클릭했습니다!")
    }
    return (
        <div>
            {new Date().toLocaleTimeString()}
        </div>
    )
}

export default Even;