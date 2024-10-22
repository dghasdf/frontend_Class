import React from "react";

const body2 = () => {
  // const[name,setName] = useState("")
  // const[gender, setGender]= useState("")
  // const[birth,setBirth] = useState("")

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const onChageName = (e) => {
    setName(e.target.value);
  };
  const onChageGender = (e) => {
    setGender(e.target.value);
  };
  const onChageBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChageBio = (e) => {
    setBio(e.target.value);
  };
  const handleOnChange = (e) => {
    console.log("현재 수정 대상:", e.target.name);
    console.log("수정값:", e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={(state, name)}
          onChage={handleOnChange}
          placeholder="이름"
        />
      </div>
      <div>
        <select name="gender" value={gender} onchange={handleOnChange}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <input type="date" onChange={handleOnChange} />
    </div>
  );
};
export default body2;
