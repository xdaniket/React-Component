import { useState } from "react";

const FunctionComp = () => {
  const [myName, setNameval] = useState("");
  const [myEmail, setEmailval] = useState("");

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setNameval(e.target.value)} />
      </div>
      <div>
        <strong>Name : {myName}</strong>
      </div>

      <br />
      <br />

      <div>
        <input type="email" onChange={(e) => setEmailval(e.target.value)} />
        <div>
          <strong>Email :{myEmail}</strong>
        </div>
      </div>
    </>
  );
};
export default FunctionComp;
