import React from 'react'
import {Row , Col, Image, Button} from 'react-bootstrap'
import {
    FiSettings,
    FiMoreHorizontal
} from 'react-icons/fi'
import Details from '../home/TrendsDetails'

function RightSideHome() {
    return (
        <>
            
            <div className="whoToFollow mt-1">
                <h4 className="mb-4">Who to follow</h4>
                <Row  style={{borderTop : "1px solid silver", paddingTop : "15px"}}>
                    <Col sm={2}>
                        <Image src="../../images/pic1.jpg" alt="User Follow" width="50px" height="50p" style={{borderRadius:"50px"}} />
                    </Col>
                    <Col sm={6}>
                        <div  className="d-flex flex-column" style={{paddingLeft : "10px"}}>
                            <h6 >Urwa Hussain</h6>
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
                            <h6 >Urwa Hussain</h6>
                            <small style={{marginTop : "-10px"}} >@urwa6744</small>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Button className="followBtn"  style={{borderRadius: "50px"}}>Follow</Button>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>
                        <p style={{color : "#1e90ff" , borderTop : "1px solid silver" , marginTop : "10px" , paddingTop : "10px"}}>Show more</p>
                    </Col>
                </Row>
            </div>

            <div className="RightSideHome mt-3">
                <Row>
                    <Col sm={10}>
                        <h4>Trends For You</h4>
                    </Col>
                    <Col sm={2}>
                        <FiSettings className="RightSideHome_Icon" />
                    </Col>
                </Row>
                
                {
                    Details.map(({id , name , tweets}) => (
                        <Row>
                            <Col sm={12} key={id}>
                                <div className="d-flex flex-column mt-2 pt-1" style={{borderTop : "1px solid silver"}} >
                                    <div className="row">
                                        <div className="col-10">
                                            <small style={{color : "#AFB7BC"}}>Trending in Pakistan</small>
                                        </div>
                                        <div className="col-2">
                                            <FiMoreHorizontal className="RightSideHome_Icon" style={{color : "black"}} />
                                        </div>
                                    </div>
                                    <small className = "boldName" > {name}</small>
                                    <small style={{color : "#AEB6BK"}} className="spane2">{tweets} tweets</small>
                                </div>
                            </Col>
                        </Row>
                    ))
                }
                <Row>
                    <Col sm={12}>
                        <p style={{color : "#1e90ff" , borderTop : "1px solid silver" , marginTop : "10px" , paddingTop : "10px"}}>Show more</p>
                    </Col>
                </Row>

            </div>



            <div  className = "mt-4 conditions" >
                <Row >
                    <Col sm={5}>
                        <small>Terms of Services</small>
                    </Col>
                    <Col sm={4}>
                        <small>Privacy Policy</small>
                    </Col>
                    <Col sm={3}>
                        <small>Cookie </small>
                    </Col>
                </Row>

                <Row className="mt-3 mb-4" >
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

export default RightSideHome
