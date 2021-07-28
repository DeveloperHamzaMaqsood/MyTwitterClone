import React from 'react'
import {Col} from 'react-bootstrap';
import {FiSettings} from 'react-icons/fi'

function MiddleNav() {
    return (
        <>
            <div className="row trends" >
                <Col sm={11}>
                    <input type="text" placeholder="Search Twitter" style={{minWidth:"477px" , marginTop:"5px" , height:"45px" , borderRadius : "50px" , paddingLeft :"40%" ,  border:"1px solid silver" }} />
                </Col>
                <Col sm={1}>
                    <FiSettings className="settingBtn" />
                </Col>
            </div>
        </>
    )
}

export default MiddleNav
