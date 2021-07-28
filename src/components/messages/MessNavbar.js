import React from 'react'
import Sidebar from '../Sidebar';
import {Row , Col} from 'react-bootstrap'
import {FiSettings} from 'react-icons/fi'
import {BiMessageAltDots} from 'react-icons/bi'


function MessNavbar() {
    return (
        <> 
            <div  className = "msgHeader" >
            <Row >
                <Col className="msg_first" >
                    <Sidebar className="msg_first_icon" />
                </Col>
                <Col className="msg_sec"  >
                    <Row>
                        <Col sm={10}>
                            <h5 style={{fontWeight:"900"}}>Messages</h5>
                        </Col>
                        <Col sm={1}>
                            <FiSettings className="hyt" style={{color: "#1DA1F2" , fontSize:"20px" }} />
                        </Col>
                        <Col sm={1}>
                            <BiMessageAltDots className="hyt" style={{color: "#1DA1F2" , fontSize:"25px"  }} />
                        </Col>
                    </Row>
                </Col>
                <Col className="msg_third"  >
                    
                </Col>
            </Row>
            
        </div>
        </>
    )
}

export default MessNavbar
