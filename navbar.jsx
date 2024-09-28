import { useEffect, useState } from "react"
import {Link}from "react-router-dom"



export const HeaderComponents = () => {
    
    const [loggeduser,setloggeduser]=useState(false)

    // useEffect(()=>{
    //   alert(loggeduser===true?"loggedin":"loggedout")
    // },[loggeduser])

    return (
        <>
            <div className='header'>
                <a href="/" ><img className="logo-image" src="logo.jpg" alt='logo' /> </a>
                <div className='navitems'>
                    <ul>
                        <li>Home</li>
                       <a href="/about"><l1>About</l1></a>
                        <li>Content</li>
                        <li>Cart</li>
                    </ul> 
                </div>
                { loggeduser?<button onClick={()=>setloggeduser(false)}>LogIn</button>:<button onClick={()=>setloggeduser(true)}>Log Out</button> }
               
           
            </div>

        </>
    )     
}

