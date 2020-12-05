//useState 사용 방법

import React,{useState} from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    //이 함수의 파라미터에는 상태의 기본값을 넣어줍니다.
    
    return (
      <div>
        <p>
          현재 카운터 값은 <b>{value}</b> 입니다.
        </p>
        <button onClick={() => setValue(value + 1)}>+1</button>
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
    );
  };

export default Counter;