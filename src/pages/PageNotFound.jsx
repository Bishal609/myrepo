import React, { useState } from 'react'
import { use } from 'react'

function PageNotFound() {
    let a=10
    const changed=()=>{
        alert("fired")
        a=a+1
    }

    const[b, setb]=useState(0)
    const[show,setShow]=useState(false)
  return (
    <div>
        {a}
        {console.log(a)}
        <button onClick={()=>changed()}>change data</button>
        {b}
        <div onClick={()=>{
            setb(b+1)
        }}>change b</div>
        <button onClick={()=>setShow(!show)}>Clickme</button>
        {show?<div className=''>Here</div>:null}
       
    </div>
  )
}

export default PageNotFound