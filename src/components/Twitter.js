import React from 'react'
import {Row , Col} from 'react-bootstrap';
import {GiStarShuriken} from 'react-icons/gi';

function Twitter() {
    return (
        <>
            <div  className = "tweetNav" >
                <Row>
                <div className="d-flex flex-row pt-3 middle ">
                    <Col sm={6}>
                        <h6>Home</h6>
                    </Col>
                    <Col sm={5}>
                    </Col>
                    <Col sm={1}   >
                        <GiStarShuriken   className="navstarIcon" />
                    </Col>
                </div>
            </Row>
            </div>
        </>
    )
}

export default Twitter
