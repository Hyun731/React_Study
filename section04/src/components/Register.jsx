import { useState } from "react";

export default function Register() {
 const [name,setName] = useState("");
 const [conutry,setConutry] = useState("");
 
 const changeName = (e) => {
  setName(e.target.value);
 };

 const changeConutry = (e) => {
  setConutry(e.target.value);
 };

 return (
  <div>
   <input onChange={changeName} placeholder="이름"></input>
   <p>{name}</p>
   <select value={conutry} onChange={changeConutry}>
    <option value=""></option>
    <option value="kr">한국</option>
    <option value="us">영어</option>
    <option value="uk">영국</option>
   </select>
   <p>{conutry}</p>
  </div>
 );
}