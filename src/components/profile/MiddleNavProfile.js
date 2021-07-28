import React from 'react'
import {IoMdArrowBack} from 'react-icons/io'
import {MdPlaylistAdd} from 'react-icons/md'
import {FiMoreHorizontal} from 'react-icons/fi'
import {
    Row,
    Col
} from 'react-bootstrap';

function MiddleNav() {
    return (
        <>
            <Row  >
                        <Col sm={1}>
                            <IoMdArrowBack className="listIcons listIcons11" />
                        </Col>
                        <Col sm={11}>
                            <div  className = "d-flex flex-column naming" >
                                <h5 style={{fontWeight:"900"}}>Hamza Maqsood</h5>
                                <small style={{marginTop : "-10px", color:"#ACAFC0"}}>0 Tweets</small>
                            </div>
                        </Col>
                        
                    </Row>
        </>
    )
}

export default MiddleNav
