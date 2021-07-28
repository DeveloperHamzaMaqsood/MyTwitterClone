import React from 'react'


import {
    AiOutlineTwitter,
} from 'react-icons/ai'


function Sidebar() {
    return (
        <>
            <div className="sideBar">
                <ul style={{listStyle :"none" , paddingLeft : "10px"}}>
                    <li >
                        <div  className = "d-flex flex-row  innerSidebar" >
                            <AiOutlineTwitter className="twitter_icon" />
                        </div>
                    </li>
                </ul>

                
            </div>
        </>
    )
}

export default Sidebar
