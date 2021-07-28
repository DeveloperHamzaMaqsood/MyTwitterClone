import React from 'react'
import {Row , Col, Button , Image} from 'react-bootstrap'

function PeopleToFollow() {
    return (
        <>
            <Row className="newWHotoFollow">
                    <h5 className="mb-2" style={{fontWeight : "900" , marginLeft : "20px"}}>Who to follow</h5>
                    <Col sm={12}>
                        <div className="ProfileWhotoFollow mt-1">
                            <Row  style={{borderTop : "1px solid silver", paddingTop : "15px"}}>
                                <Col sm={2}>
                                    <Image src="../../images/pic1.jpg" alt="User Follow" width="40px" height="40px"  className="img_glob" style={{borderRadius:"50px"}} />
                                </Col>
                                <Col sm={9}>
                                    <div className = "d-flex flex-column"
                                    className = "peopleTop" >
                                        <h6>Urwa Hussain</h6>
                                        <small className="htt" >@urwa6744</small>
                                    </div>
                                </Col>
                                <Col sm={1}>
                                    <Button className="followUserBtn1"  >Follow</Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={1} >
                                    
                                </Col>
                                <Col sm={10}>
                                    <small className="followSmall" > Multimedia Journalist
                                    @trturducom, Op - Ed Articles
                                    @roznamadunya# ILO Award winner
                                    for reporting on Child Labour‎‎ http: //youtube.com/javeriasiddique</small>
                                </Col>
                                
                            </Row>
                        </div>

                        <div className="ProfileWhotoFollow mt-1">
                            <Row  style={{borderTop : "1px solid silver", paddingTop : "15px"}}>
                                <Col sm={2}>
                                    <Image src="../../images/pic1.jpg" alt="User Follow" width="40px" height="40px"  className="img_glob" style={{borderRadius:"50px"}} />
                                </Col>
                                <Col sm={9}>
                                    <div className = "d-flex flex-column"
                                    className = "peopleTop" >
                                        <h6>Urwa Hussain</h6>
                                        <small  >@urwa6744</small>
                                    </div>
                                </Col>
                                <Col sm={1}>
                                    <Button className="followUserBtn1"  >Follow</Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={1} >
                                    
                                </Col>
                                <Col sm={10}>
                                    <small > Multimedia Journalist
                                    @trturducom, Op - Ed Articles
                                    @roznamadunya# ILO Award winner
                                    for reporting on Child Labour‎‎ http: //youtube.com/javeriasiddique</small>
                                </Col>
                                
                            </Row>
                        </div>

                        <div className="ProfileWhotoFollow mt-1">
                            <Row  style={{borderTop : "1px solid silver", paddingTop : "15px"}}>
                                <Col sm={2}>
                                    <Image src="../../images/pic1.jpg" alt="User Follow" width="40px" height="40px"  className="img_glob" style={{borderRadius:"50px"}} />
                                </Col>
                                <Col sm={9}>
                                    <div className = "d-flex flex-column"
                                    className = "peopleTop" >
                                        <h6>Urwa Hussain</h6>
                                        <small  >@urwa6744</small>
                                    </div>
                                </Col>
                                <Col sm={1}>
                                    <Button className="followUserBtn1"  >Follow</Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={1} >
                                    
                                </Col>
                                <Col sm={10}>
                                    <small > Multimedia Journalist
                                    @trturducom, Op - Ed Articles
                                    @roznamadunya# ILO Award winner
                                    for reporting on Child Labour‎‎ http: //youtube.com/javeriasiddique</small>
                                </Col>
                                
                            </Row>
                        </div>
                    </Col>
                </Row>
                
                


        </>
    )
}

export default PeopleToFollow
