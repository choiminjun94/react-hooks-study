// //rsc

// import React, { useState, useEffect } from "react";

// const Info2 = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickName] = useState("");
//   useEffect(() => {
//     console.log("렌더링이 완려 되었습니다.");
//     console.log({
//       name,
//       nickname,
//     });
//   });

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeNickName = (e) => {
//     setNickName(e.target.value);
//   };
//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickName} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임: </b>
//           {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info2;

////rsc

// import React, { useState, useEffect } from "react";

// const Info2 = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickName] = useState("");
//   // 마운트 될 때만 실행
//   useEffect(() => {
//     console.log("마운트 될 때만 실행됩니다.");
//   }, []);
//   //
//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeNickName = (e) => {
//     setNickName(e.target.value);
//   };
//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickname} onChange={onChangeNickName} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임: </b>
//           {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info2;

import React, { useState, useEffect } from "react";

const Info2 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  
  // 특정 값이 업데이트 될 때만 실행하고 싶을 때
  useEffect(() => {
    console.log("이름 내역");
    console.log(name);
  }, [name]);
  //
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info2;