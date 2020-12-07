// import React, { useState } from 'react';

// const getAverage = numbers => {
//   console.log('평균값 계산중..');
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState('');

//   const onChange = e => {
//     setNumber(e.target.value);
//   };
//   const onInsert = e => {
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber('');
//   };

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균 값:</b> {getAverage(list)}
//       </div>
//     </div>
//   );
// };

// export default Average;

// 평균 값은 잘 보여지고 있는데, 숫자를 등록할 때뿐만 아니라 인풋 내용이 수정 될 때도 우리가 만든 getAverage 함수가 호출되고 있는것을 확인 할 수 있습니다. 
// 인풋 내용이 바뀔 땐 평균 값을 다시 계산 할 필요가 없는데, 이렇게 렌더링 할 때마다 계산을 하는 것은 낭비

import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };
  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;

// useMemo Hook 을 사용하면 이러한 작업을 최적화 할 수 있습니다. 
// 렌더링 하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 만약에 원하는 값이 바뀐 것이 아니라면 이전에 연산했던 결과를 다시 사용하는 방식