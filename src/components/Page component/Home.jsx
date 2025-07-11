import React from 'react'
import Banner from '../ui/banner'
import { useNavigate } from 'react-router-dom'


function Home ()  {
    const navigate=useNavigate()
    
    const transfer=()=>{
       navigate('/about')
    }
    return (
        <div>

            {/* <div className='text-red-500'>Banner</div> */}
            <Banner title="home" subtitle='it`s a home page'
            description="it`s a description"/>
        <button onClick={()=>{transfer()}}>
         About us
        </button>
    </div>
    )
}export default Home