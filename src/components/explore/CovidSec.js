import React from 'react'
import {Row , Col, Image} from 'react-bootstrap'

function CovidSec() {
    return (
        <>
            <Row>
                <Col sm={12}>
                    <Image src="../../images/maskpic2.jpg" alt="Covid Pic here" width="100%"  height="340px"  style={{maxWidth:"100%" }}/>
                </Col>
                <Col sm={12}>
                    <div className="d-flex flex-column covidPart">
                        <p >COVID-19. LIVE</p>
                        <h4 style={{marginTop:"-15px"}}>Updates on Covid-19 Pakistan</h4>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default CovidSec
