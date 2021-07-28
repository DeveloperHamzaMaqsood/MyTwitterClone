import React from 'react'
import {Row , Col , Button , Sibling , Image} from 'react-bootstrap'

function ExploreRightSide() {
    return (
        <>
            <div  className = "whoToFollowexplore" >
                    <h5 className="mb-3">Who to follow</h5>
                    <Row  style={{borderTop : "1px solid silver", paddingTop : "10px" , marginTop : "5px"}}>
                        <Col sm={2}>
                            <Image src="../../images/pic1.jpg" alt="User Follow" width="50px" height="50px" style={{borderRadius:"50px"}} />
                        </Col>
                        <Col sm={6}>
                            <div  className="d-flex flex-column" style={{paddingLeft : "10px"}}>
                                <h6 style={{fontWeight : "700" , fontSize : "15px"}} >Urwa Hussain</h6>
                                <small style={{marginTop : "-10px"}} >@urwa6744</small>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <Button className="followBtn"  style={{borderRadius: "50px"}}>Follow</Button>
                        </Col>
                    </Row>

                    <Row  style={{borderTop : "1px solid silver", paddingTop : "15px", marginTop :"10px"}}>
                        <Col sm={2}>
                            <Image src="../../images/pic1.jpg" alt="User Follow" width="50px" height="50p" style={{borderRadius:"50px"}} />
                        </Col>
                        <Col sm={6}>
                            <div  className="d-flex flex-column" style={{paddingLeft : "10px"}}>
                                <h6 style={{fontWeight : "700" , fontSize : "15px"}}>Urwa Hussain</h6>
                                <small style={{marginTop : "-10px"}} >@urwa6744</small>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <Button className="followBtn"  style={{borderRadius: "50px"}}>Follow</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <p style={{color : "#1e90ff" , borderTop : "1px solid silver" , marginTop : "10px" , paddingTop : "10px" , fontSize : "14px"}}>Show more</p>
                        </Col>
                    </Row>
                </div>
                <hr/>

                    <div  className = "mt-4 conditions" >
                <Row >
                    <Col sm={5}>
                        <small>Terms of Services</small>
                    </Col>
                    <Col sm={4}>
                        <small>Privacy </small>
                    </Col>
                    <Col sm={3}>
                        <small>Cookie </small>
                    </Col>
                </Row>

                <Row className="mt-0 mb-4" >
                    <Col sm={4}>
                        <small>Adds Info</small>
                    </Col>
                    <Col sm={3}>
                        <small>More</small>
                    </Col>
                    <Col sm={5}>
                        <small>@2021 Twitter </small>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ExploreRightSide
