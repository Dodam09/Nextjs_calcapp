"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState('');
  const [result, setResult] = useState('');

  function Btn(e) {
    const btn = e.target.value;
    setInputVal(inputVal + btn);
  }
  function Del(e){
    setInputVal(inputVal.slice(0,-1))
  }

  function Result(e) {
    e.preventDefault();
    setResult(Function('"use strict";return (' + inputVal + ')')());
  }

  useEffect(() => {
    setInputVal(result)
  }, [result]); 

  return (
    <>
      <form>
        <div className="BG">
          <div className="window">
            <input type="text" value={inputVal} readOnly onClick={(e) => e.preventDefault()} />
          </div>
          <div className="BtnCon">
            <input type="button" value="CE" onClick={(e) => { setInputVal(''); setResult(''); }} />
            <input type="button" value="(" onClick={(e) => Btn(e)} />
            <input type="button" value=")" onClick={(e) => Btn(e)} />
            <input type="button" value="*" onClick={(e) => Btn(e)} />
            <input type="button" value="7" onClick={(e) => Btn(e)} />
            <input type="button" value="8" onClick={(e) => Btn(e)} />
            <input type="button" value="9" onClick={(e) => Btn(e)} />
            <input type="button" value="/" onClick={(e) => Btn(e)} />
            <input type="button" value="4" onClick={(e) => Btn(e)} />
            <input type="button" value="5" onClick={(e) => Btn(e)} />
            <input type="button" value="6" onClick={(e) => Btn(e)} />
            <input type="button" value="-" onClick={(e) => Btn(e)} />
            <input type="button" value="1" onClick={(e) => Btn(e)} />
            <input type="button" value="2" onClick={(e) => Btn(e)} />
            <input type="button" value="3" onClick={(e) => Btn(e)} />
            <input type="button" value="+" onClick={(e) => Btn(e)} />
            <input type="button" value="." onClick={(e) => Btn(e)} />
            <input type="button" value="0" onClick={(e) => Btn(e)} />
            <input type="button" value="x" onClick={(e) => Del(e)} style={{color : 'red', fontWeight: 'bold'}}/>
            <input type="submit" value="=" onClick={(e) => Result(e)} />
          </div>
        </div>
      </form>
    </>
  );
}
