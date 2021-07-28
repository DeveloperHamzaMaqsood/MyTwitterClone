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
                            <IoMdArrowBack className="listIcons" />
                        </Col>
                        <Col sm={9}>
                            <div className="d-flex flex-column" style={{paddingLeft: "11px"}}>
                                <h5  className="listHead" style={{fontWeight:"900"}}>Lists</h5>
                                <small className="listsmall" style={{marginTop : "-10px", color:"#ACAFC0"}}>@Hamzamaq89577</small>
                            </div>
                        </Col>
                        <Col sm={1}>
                            <MdPlaylistAdd  className="listIcons listIcons1" />
                        </Col>
                        <Col sm={1}>
                            <FiMoreHorizontal className="listIcons  listIcons2" />
                        </Col>
                    </Row>
        </>
    )
}

export default MiddleNav
