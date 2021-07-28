import React from 'react'
import { Row, Col , Image  } from 'react-bootstrap'

function NewLists() {
    return (
        <>
            
                <div  className = "discoverLists bgWhite" >
                    <h5 >Discover New Lists</h5>
                <Row  className = " pt-2 pb-2" style={{borderBottom:"1px solid lightgrey" , overFlow :"hidden" , marginRight : "5px"}} >
                    <Col sm={1}>
                        <Image src="../../../images/hamzaPic.jpeg" width="50px" height="50px" alt="List Image" style={{borderRadius:"20px"}} />
                    </Col>
                    <Col sm={10}>
                        <div className="d-flex flex-column">
                            <h6  className="urdu" style={{ fontWeight:"bold"}} >Urdu</h6>
                            <Row >
                                <Col Col sm = {12}
                                className = "bpp" >
                                    <div  className = "d-flex flex-row bppImage" >
                                        <Image   src="../../../images/abde.jpg" width="20px" height="20px" style={{borderRadius : "50px"}} alt="Image Here"/>
                                        <small className="newUserName" style={{fontWeight:"900" , marginRight :"5px" , marginLeft : "5px"}}>Ahsan Iqbal</small>
                                        <small>@AhsanBro</small>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={1}  >
                        <button class="btn discoverfollow">Follow</button>
                    </Col>
                </Row>

                <Row  className = " pt-2 pb-2" style={{borderBottom:"1px solid lightgrey" , overFlow :"hidden" , marginRight : "5px"}} >
                    <Col sm={1}>
                        <Image src="../../../images/hamzaPic.jpeg" width="50px" height="50px" alt="List Image" style={{borderRadius:"20px"}} />
                    </Col>
                    <Col sm={10}>
                        <div className="d-flex flex-column">
                            <h6  className="urdu" style={{ fontWeight:"bold"}} >Urdu</h6>
                            <Row >
                                <Col Col sm = {12}
                                className = "bpp" >
                                    <div  className = "d-flex flex-row bppImage" >
                                        <Image   src="../../../images/abde.jpg" width="20px" height="20px" style={{borderRadius : "50px"}} alt="Image Here"/>
                                        <small className="newUserName" style={{fontWeight:"900" , marginRight :"5px" , marginLeft : "5px"}}>Ahsan Iqbal</small>
                                        <small>@AhsanBro</small>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={1}  >
                        <button class="btn discoverfollow">Follow</button>
                    </Col>
                </Row>


                <Row  className = " pt-2 pb-2" style={{borderBottom:"1px solid lightgrey" , overFlow :"hidden" , marginRight : "5px"}} >
                    <Col sm={1}>
                        <Image src="../../../images/hamzaPic.jpeg" width="50px" height="50px" alt="List Image" style={{borderRadius:"20px"}} />
                    </Col>
                    <Col sm={10}>
                        <div className="d-flex flex-column">
                            <h6  className="urdu" style={{ fontWeight:"bold"}} >Urdu</h6>
                            <Row >
                                <Col Col sm = {12}
                                className = "bpp" >
                                    <div  className = "d-flex flex-row bppImage" >
                                        <Image   src="../../../images/abde.jpg" width="20px" height="20px" style={{borderRadius : "50px"}} alt="Image Here"/>
                                        <small className="newUserName" style={{fontWeight:"900" , marginRight :"5px" , marginLeft : "5px"}}>Ahsan Iqbal</small>
                                        <small>@AhsanBro</small>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={1}  >
                        <button class="btn discoverfollow">Follow</button>
                    </Col>
                </Row>

                
            </div>
        </>
    )
}

export default NewLists
