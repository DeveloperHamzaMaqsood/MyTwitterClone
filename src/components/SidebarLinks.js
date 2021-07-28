import React from 'react'
import {Button , Row , Col} from 'react-bootstrap'
import {
    AiOutlineUser
} from 'react-icons/ai'
import {FaHashtag}from 'react-icons/fa'
import {
    BiHomeCircle,
    BiMessage
} from 'react-icons/bi'
import {GrNotification} from 'react-icons/gr'
import {BsBookmark} from 'react-icons/bs'
import {
    CgProfile,
    CgList,
    CgMoreO
} from 'react-icons/cg'
import {FiMoreHorizontal} from 'react-icons/fi'
import {Link} from 'react-router-dom';

function SidebarLinks() {
    return (
        <>
            <div  className = "Links" >

                <ul    style = {
                    {
                        listStyle: "none",
                        paddingLeft: "10px",
                        
                    }
                } >
                    <li  >
                        <div  className = "d-flex flex-row  innerSidebar" >
                            <Link to="/" >
                                <BiHomeCircle className="otherIcons activeLink" style={{fontSize : "28px" }} />
                            </Link>
                            <p className="activeLink hid" style={{textDecoration : "none"}}>Home</p>
                        </div>
                    </li>
                    <li style={{ marginTop :"7px"}} >
                        <div  className = "d-flex flex-row  innerSidebar" >
                            <Link to="/explore">
                                <FaHashtag className="otherIcons" style={{color : "black"}} />
                            </Link>
                            <p  className="hid">Explore</p>
                        </div>
                    </li>
                    <li style={{ marginTop :"7px"}} >
                        <div  className = "d-flex flex-row  innerSidebar" >
                            <Link to="/notification" >
                                <GrNotification  className="otherIcons " style={{color : "black"}} />
                            </Link>
                            <p className="hid" >Notifications</p>
                        </div>
                    </li>
                    <li style={{ marginTop :"7px"}} >
                        <div  className = "d-flex flex-row  innerSidebar" >
                            <Link to="/messages" >
                                <BiMessage  className="otherIcons " style={{color : "black"}} />
                            </Link>
                            <p  className="hid" >Messages</p>
                        </div>
                    </li>
                    <li style={{ marginTop :"7px"}}  >
                        <div  className = "d-flex flex-row  innerSidebar" >
                            <Link to="/bookmarks" >
                                <BsBookmark  className="otherIcons " style={{color : "black"}} />
                            </Link>
                            <p className="hid">Booklists</p>
                        </div>
                    </li>
                    <li style={{ marginTop :"7px"}}  >
                        <div  className = "d-flex flex-row  innerSidebar" >
                            <Link to="/lists" >
                                <CgList  className="otherIcons " style={{color : "black"}} />
                            </Link>
                            <p className="hid">Lists</p>
                        </div>
                    </li>
                    <li style={{ marginTop :"7px"}} >
                        <div  className = "d-flex flex-row  innerSidebar toTop" >
                            <Link to="/profile" >
                                <CgProfile  className="otherIcons" style={{color : "black"}} />
                            </Link>
                            <p className="hid" >Profile</p>
                        </div>
                    </li>
                    <li style={{ marginTop :"7px"}} >
                        <div  className = "d-flex flex-row  innerSidebar" >
                            <CgMoreO  className="otherIcons" style={{color : "black"}} />
                            <p className="hid">More</p>
                        </div>
                    </li>
                </ul>

                <div >
                    <Button  className="butt" size="lg" block  style={{borderRadius : "50px" , fontSize: "15px" , backgroundColor : "#1DA1F2" , border :" 1px solid transparent",fontWeight: "900"}}>Tweet</Button>
                </div>

                <ul style={{listStyle:"none"}}>
                    
                        <li  >
                        <div  className = "d-flex flex-row  inner" >
                            <AiOutlineUser className="fig1" />
                            <span>Hamza Maqsood</span>
                            <FiMoreHorizontal className="fig2" />
                        </div>
                    </li>
                    
                </ul>
            </div>
            
        </>
    )
}

export default SidebarLinks
