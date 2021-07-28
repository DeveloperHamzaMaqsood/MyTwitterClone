import React from 'react'
import {Row , Col , Button, Image} from 'react-bootstrap'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {FiMoreHorizontal} from 'react-icons/fi'
import {HiUserCircle} from 'react-icons/hi'
import {RiGalleryLine} from 'react-icons/ri'
import {
    AiOutlineFileGif
} from 'react-icons/ai'
import {BiPoll} from 'react-icons/bi'
import {AiOutlineSmile} from 'react-icons/ai'
import {BiTimer} from 'react-icons/bi'
import {GoVerified} from 'react-icons/go'
import {BiMessageRounded} from 'react-icons/bi'
import {
    FaRetweet,
    FaComment
} from 'react-icons/fa'
import {
    BsHeart,
    BsUpload
} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

function CricViralTweets() {
    return (
        <>
            <div className="viralTweets mt-3">
            
            <Row>
                    <Col sm={1}>
                        <BiMessageRoundedDetail className="viralIcons" />
                    </Col>
                    <Col sm={10}>
                        <h5>Cricket</h5>
                    </Col>
                    <Col sm={1}>
                        <FiMoreHorizontal style={{fontSize : "20px" , color : "#485460"}}/>
                    </Col>
                </Row>
        
            <Row  className = "tweetPosts d-flex flex-row mt-3 pb-2 pt-2 changebg" >
                <Col sm={1}>
                    <Image src="../../images/hardick.jpg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>hardick pandya </p>
                        <GoVerified className="go" />
                        <small>@hardickPandya988</small>
                        <small>. 11m ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal style={{fontSize : "20px"}} />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                </Col>
                <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                    <p>What do You say guy's ?</p>
                    <Image src="../../images/hardick2.jpg" alt="User Image Here" width="100%" height="300px" style={{borderRadius : "10px" , marginTop : "10px"}}/>

                </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px"}} >
                        <Row className="tweetsReply" >
                            <Col sm={3}>
                                <BiMessageRounded style={{fontSize:"20px"}} />
                                <small>7</small>
                            </Col>
                            <Col sm={3}>
                                <FaRetweet style={{fontSize:"20px"}}/>
                                <small>7</small>
                            </Col>
                            <Col sm={3}>
                                <BsHeart style={{fontSize:"20px"}} />
                                <small>7</small>
                            </Col>
                            <Col sm={3}>
                                <BsUpload style={{fontSize:"20px"}} />
                                <small>7</small>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
        
            <Row  className = "tweetPosts d-flex flex-row mt-2 pb-2 pt-2 changebg" >
                <Col sm={1}>
                    <Image src="../../images/espnlogo.png" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>ESPNCricinfo </p>
                        <GoVerified className="go" />
                        <small>@ESPNcricinfo</small>
                        <small>. 11m ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal style={{fontSize : "20px"}} />
                </Col>

                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                        <p>What say about DJ Bravo?</p>
                        <Image src="../../images/djbravo.jpg" alt="User Image Here" width="100%" height="300px" style={{borderRadius : "10px" , marginTop : "10px"}}/>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px"}} >
                        <Row className="tweetsReply" >
                            <Col sm={3}>
                                <BiMessageRounded style={{fontSize:"20px"}} />
                                <small>7</small>
                            </Col>
                            <Col sm={3}>
                                <FaRetweet style={{fontSize:"20px"}}/>
                                <small>7</small>
                            </Col>
                            <Col sm={3}>
                                <BsHeart style={{fontSize:"20px"}} />
                                <small>7</small>
                            </Col>
                            <Col sm={3}>
                                <BsUpload style={{fontSize:"20px"}} />
                                <small>7</small>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
        
            <Row  className = "tweetPosts d-flex flex-row mt-3 pb-2 pt-2 changebg" >
                <Col sm={1}>
                    <Image src="../../images/afridi.png" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>Shahd Afridi </p>
                        <GoVerified className="go" />
                        <small>@IamShahidAfridi787 .</small>
                        <small>5s ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal style={{fontSize : "20px"}} />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                </Col>
                <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                    <p>
                        Hoping for Multan Sultan will win Tournament . IA
                    </p>
                </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px"}} >
                        <Row className="tweetsReply" >
                            <Col sm={3}>
                                <BiMessageRounded style={{fontSize:"20px"}} />
                                <small>5</small>
                            </Col>
                            <Col sm={3}>
                                <FaRetweet style={{fontSize:"20px"}}/>
                                <small>14</small>
                            </Col>
                            <Col sm={3}>
                                <BsHeart style={{fontSize:"20px"}} />
                                <small>55</small>
                            </Col>
                            <Col sm={3}>
                                <BsUpload style={{fontSize:"20px"}} />
                                <small></small>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
        
            <Row  className = "tweetPosts d-flex flex-row mt-3 pb-2 pt-2 changebg" >
                <Col sm={1}>
                    <Image src="../../images/abde.jpg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>Mr 360 Degree  </p>
                        <GoVerified className="go" />
                        <small>@ABdevilliars .</small>
                        <small>12h ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal style={{fontSize : "20px"}} />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                        <p>i, tenetur! Veniam nisi amet odio magnam beatae error exercitationem corporis tenetur blanditiis tempora, nobis, voluptates ipsam, ex a porro eius ratione?</p>
                        <Image src="../../images/abdeGama.jpg" alt="User Image Here" width="100%" height="300px" style={{borderRadius : "10px" , marginTop : "10px"}}/>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px"}} >
                        <Row className="tweetsReply" >
                            <Col sm={3}>
                                <BiMessageRounded style={{fontSize:"20px"}} />
                                <small>210</small>
                            </Col>
                            <Col sm={3}>
                                <FaRetweet style={{fontSize:"20px"}}/>
                                <small>57</small>
                            </Col>
                            <Col sm={3}>
                                <BsHeart style={{fontSize:"20px"}} />
                                <small>299</small>
                            </Col>
                            <Col sm={3}>
                                <BsUpload style={{fontSize:"20px"}} />
                                <small></small>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
            
            <Row className="mt-2" >
                <Col sm={1}>
                    <BiMessageRoundedDetail className="viralIcons" />
                </Col>
                <Col sm={9}>
                    <h5>Cricket</h5>
                </Col>
                <Col sm={2}>
                    <Button className="followBtn"  style={{borderRadius: "50px"}}>Follow</Button>
                </Col>
            </Row>
            </div>
        </>
    )
}

export default CricViralTweets
