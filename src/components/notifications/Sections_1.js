import React from 'react'
import {Row , Col} from 'react-bootstrap'

function Sections() {
    return (
        <>
            <Row style={{borderBottom : "3px solid #F5F7F9"}} >
                <Col sm={6} >
                    <h6  className="sec1"  >All</h6>
                </Col>
                <Col sm={6}>
                    <h6  className="sec2" style={{color : "black", textDecoration : "none" }}>Mentions</h6>
                </Col>
            </Row>
        </>
    )
}

export default Sections
