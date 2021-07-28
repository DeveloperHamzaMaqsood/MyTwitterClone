import React from 'react'
import {Row , Col} from 'react-bootstrap';
import {AiOutlineSetting} from 'react-icons/ai';

function Twitter() {
    return (
        <>
            <div  className = "tweetNav static" style={{position:"static"}} >
                <Row>
                <div className="d-flex flex-row pt-3 middle ">
                    <Col sm={6}>
                        <h6  style={{fontSize:"20px" }}>Notifications</h6>
                    </Col>
                    <Col sm={5}>
                    </Col>
                    <Col sm={1}   >
                        <AiOutlineSetting   className="navstarIcon" style={{fontSize:"22px"}} />
                    </Col>
                </div>
            </Row>
            </div>
        </>
    )
}

export default Twitter
