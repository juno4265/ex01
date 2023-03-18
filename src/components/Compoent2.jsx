import React, { useRef, useState } from 'react'

const Compoent2 = () => {
    const ref_name =useRef(null);

    const [form,setForm] = useState({
        name: '홍길동',
        address: '인하대',
        phone: '010-0000-000'
    });
    const {name,address,phone}  = form;

    const onRegister = (e) => {
        e.preventDefault();
        if(window.confirm('주소를 등록 하실래요?')){
            alert(`이름:${name}\n주소:${address}\n전화번호:${phone}`);
            setForm({
                name:'',
                address:'',
                phone:''
            });
            ref_name.current.focus();
        }
    }
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target]:e.target.value
        })
    }
  return (
    <div>
        <h1>주소등록 12204149</h1>
        <form onSubmit={onRegister}>
            <input placeholder='이름입력' defaultvalue={form.name} name='name' onChange={(e)=>onChange(e)} ref={ref_name}/>
            <input placeholder='주소입력' defaultvalue={form.address} name='address' onChange={(e)=>onChange(e)}/>
            <input placeholder='전화번호' defaultvalue={form.phone} name='phone' onChange={(e)=>onChange(e)}/>
            <button>주소등록</button>
        </form>
        <hr/>
        <h1>이름 : {name}</h1>
        <h1>주소 : {address}</h1>
        <h1>전화번호 : {phone}</h1>
    </div>
  )
}

export default Compoent2