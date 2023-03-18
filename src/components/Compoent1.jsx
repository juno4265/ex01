import React, { useState } from 'react'

const Compoent1 = () => {
    const [count,setCount] = useState(1000)
    let number = 1000;

    const setNumber = () => {
        number = number + 100;
        console.log('number=',number);
    }


  return (
    <div>
        <h1>{count}</h1>
        <hr/>
        <div style={{textAlign:'center',background:'pink'}}>
            <button onClick={()=>setCount(count-100)}>감소</button>
            <button onClick={()=>setCount(count+100)}>증가</button>
        </div>
        <h1>{number}</h1>
        <button onClick={()=>setNumber}>Number 증가</button>
    </div>
  )
}

export default Compoent1