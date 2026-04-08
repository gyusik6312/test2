import React from "react";

function Book(props) { // 컴포넌트 기본 형태 만들기(파일과 같은 이름)
    
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h3>{`이 책의 가격은 ${props.price}원입니다.`}</h3>
        </div>
    );
}

export default Book;  // 어디서든 사용 가능