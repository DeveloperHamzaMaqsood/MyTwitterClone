import React from 'react'
import {Row , Col , Button, Image} from 'react-bootstrap'
import {HiUserCircle} from 'react-icons/hi'
import {RiGalleryLine} from 'react-icons/ri'
import {
    AiOutlineFileGif
} from 'react-icons/ai'
import {BiPoll} from 'react-icons/bi'
import {AiOutlineSmile} from 'react-icons/ai'
import {BiTimer} from 'react-icons/bi'
import {FiMoreHorizontal} from 'react-icons/fi'
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

function UserTweets() {
    return (
        <>
            <div className="UserTweets">
                <div  className = "row ownersec changebg" >
                    <Col sm={1}>
                        <HiUserCircle className="ownerIcon"/>
                    </Col>
                    <Col sm={11}>
                        <h6>What is happening?</h6>
                    </Col>

                    <Row  className = "mt-3 mb-2 d-flex flex-row" >
                        <Col sm={1}>
                        </Col>
                        <Col sm={8} style={{marginLeft: "17px" }}>
                            <div className="d-flex flex-row">
                                <RiGalleryLine className="fontChange" />
                                <AiOutlineFileGif className="fontChange"/>
                                <BiPoll className="fontChange"/>
                                <AiOutlineSmile className="fontChange"/>
                                <BiTimer className="fontChange"/>
                            </div>
                        </Col>
                        <Col>
                            <Button className="ownerBtn"> Tweet </Button>
                        </Col>
                    </Row>
                </div>
            </div>

            <Row  className = "tweetPosts d-flex flex-row mt-3 pb-2 pt-2 changebg" >
                <Col sm={1}>
                    <Image src="../../images/hamzaPic.jpeg" width="55px" height="55px" style={{borderRadius : "50px"}} className="userPhoto"  alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>Doland Trump </p>
                        <GoVerified className="go" />
                        <small>@dolandTrump . 11m ago</small>
                        
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal className="iconhori"   className="iconhori"  />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                </Col>
                <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                    <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ima ero voluptatibus vitae dolor sed hic alias aperiam odit, similique itaque autem, nemo repellendus nostrum. Minima inventore omnis blanditiis consequatur.</p>
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
                    <Image className="userPhoto" src="../../images/hamzaPic.jpeg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>Doland Trump </p>
                        <GoVerified className="go" />
                        <small>@dolandTrump</small>
                        <small>. 11m ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal className="iconhori" />
                </Col>

                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tenetur! Veniam nisi amet odio magnam beatae error exercitationem corporis tenetur blanditiis tempora, nobis, voluptates ipsam, ex a porro eius ratione?</p>
                        <Image  src="../../images/pic2.jpg" alt="User Image Here" className="uploadPic" width="100%" height="300px" style={{borderRadius : "10px" , marginTop : "10px"}}/>
                    </Col>
                </Row>

                
                    <Row className="mt-2">
                    <Col sm={1} >
                    </Col>
                    <Col sm={11}>
                    <div className="tto d-flex flex-md-column flex-row" >
                        <Row className="tweetsReply" >
                            <Col sm={3}>
                                <BiMessageRounded className="tweetsIcons" />
                                <small>7</small>
                            </Col>
                            <Col sm={3}>
                                <FaRetweet className="tweetsIcons"/>
                                <small>7</small>
                            </Col>
                            <Col sm={3}>
                                <BsHeart className="tweetsIcons" />
                                <small>7</small>
                            </Col>
                            <Col sm={3}>
                                <BsUpload className="tweetsIcons" />
                                <small>7</small>
                            </Col>
                        </Row>
                    </div>
                    </Col>
                </Row>
            </Row>
        
            <Row  className = "tweetPosts d-flex flex-row mt-3 pb-2 pt-2 changebg" >
                <Col sm={1}>
                    <Image className="userPhoto" src="../../images/hamzaPic.jpeg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>ajka  ( Free Palestine ) </p>
                        <small>@ajkamussa .</small>
                        <small>5s ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal className="iconhori" />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                </Col>
                <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                    <p className="para">
                        My 4 digits Pin Protecting my 4 digits money ...   Why?
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
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" }} >
                        <div className="d-flex flex-row pt-1 pb-1">
                            <AiFillHeart/>
                            <h6 style={{marginLeft:"10px" , fontWeight:"700"}}>Nooro Liked</h6>
                        </div>
                    </Col>
                </Row>

                <Col sm={1}>
                    <Image className="userPhoto" src="../../images/hamzaPic.jpeg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>allezey  </p>
                        <small>@allezey__ .</small>
                        <small>12h ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal className="iconhori" />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                        <p className="para" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tenetur! Veniam nisi amet odio magnam beatae error exercitationem corporis tenetur blanditiis tempora, nobis, voluptates ipsam, ex a porro eius ratione?</p>
                        <Image  src="../../images/pic2.jpg" alt="User Image Here" className="uploadPic" width="100%" height="300px" style={{borderRadius : "10px" , marginTop : "10px"}}/>
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
        
            <Row  className = "tweetPosts d-flex flex-row mt-3 pb-2 pt-2 changebg" >
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" }} >
                        <div className="d-flex flex-row pt-1 pb-1">
                            <FaComment/>
                            <h6 style={{marginLeft:"10px" , fontWeight:"700"}}>Biana Goldage Commented</h6>
                        </div>
                    </Col>
                </Row>

                <Col sm={1}>
                    <Image className="userPhoto" src="../../images/hamzaPic.jpeg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>Jim  Scocutto  </p>
                        <small>@jimscuicito878 .</small>
                        <small>12h ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal className="iconhori" />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                        <p  className="para">Lorem ipsum dolor sit ametetur blanditiis tempora, nobis, voluptates ipsam, ex a porro eius ratione?</p>
                        <Image  src="../../images/pic3.jpg" alt="User Image Here" className="uploadPic" width="100%" height="300px" style={{borderRadius : "10px" , marginTop : "10px"}}/>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px"}} >
                        <Row className="tweetsReply" >
                            <Col sm={3}>
                                <BiMessageRounded style={{fontSize:"20px"}} />
                                <small>10</small>
                            </Col>
                            <Col sm={3}>
                                <FaRetweet style={{fontSize:"20px"}}/>
                                <small>97</small>
                            </Col>
                            <Col sm={3}>
                                <BsHeart style={{fontSize:"20px"}} />
                                <small>29</small>
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
                    <Image className="userPhoto" src="../../images/hamzaPic.jpeg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>Bol News Entertainment  </p>
                        <GoVerified  className="go" />
                        <small>@bolentertainment .</small>
                        <small>3h ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal className="iconhori" />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                        <p className="para">Hareem Shah Involved In Controversy...</p>
                        <Image  src="../../images/pic3.jpg" alt="User Image Here" className="uploadPic" width="100%" height="300px" style={{borderRadius : "10px" , marginTop : "10px"}}/>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px"}} >
                        <Row className="tweetsReply" >
                            <Col sm={3}>
                                <BiMessageRounded style={{fontSize:"20px"}} />
                                <small>1k</small>
                            </Col>
                            <Col sm={3}>
                                <FaRetweet style={{fontSize:"20px"}}/>
                                <small>970</small>
                            </Col>
                            <Col sm={3}>
                                <BsHeart style={{fontSize:"20px"}} />
                                <small>289</small>
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
                    <Image className="userPhoto" src="../../images/hamzaPic.jpeg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>Reham Khan  </p>
                        <GoVerified  className="go" />
                        <small>@rehaaamkhan789 .</small>
                        <small>7h ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal className="iconhori" />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                        <p className="para">Keywords in recent speeche and interviews hint at what will Pakistan and Afghanstan will do in future!!  Go figure out must...</p>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px"}} >
                        <Row className="tweetsReply" >
                            <Col sm={3}>
                                <BiMessageRounded style={{fontSize:"20px"}} />
                                <small>855</small>
                            </Col>
                            <Col sm={3}>
                                <FaRetweet style={{fontSize:"20px"}}/>
                                <small>68</small>
                            </Col>
                            <Col sm={3}>
                                <BsHeart style={{fontSize:"20px"}} />
                                <small>94</small>
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
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" }} >
                        <div className="d-flex flex-row pt-1 pb-1">
                            <FaRetweet/>
                            <h6 style={{marginLeft:"10px" , fontWeight:"700"}}>PTI Retweeted</h6>
                        </div>
                    </Col>
                </Row>

                <Col sm={1}>
                    <Image className="userPhoto" src="../../images/hamzaPic.jpeg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>Maryam Nawaz  </p>
                        <GoVerified className="go" />
                        <small>@maryam123 .</small>
                        <small>8h ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal className="iconhori" />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                        <p className="para">Lorem ipsum dolor sit ametetur blanditiis tempora, nobis, voluptates ipsam, ex a porro eius ratione?</p>
                        <Image  src="../../images/pic3.jpg" alt="User Image Here" className="uploadPic" width="100%" height="300px" style={{borderRadius : "10px" , marginTop : "10px"}}/>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px"}} >
                        <Row className="tweetsReply" >
                            <Col sm={3}>
                                <BiMessageRounded style={{fontSize:"20px"}} />
                                <small>1.5k</small>
                            </Col>
                            <Col sm={3}>
                                <FaRetweet style={{fontSize:"20px"}}/>
                                <small>98</small>
                            </Col>
                            <Col sm={3}>
                                <BsHeart style={{fontSize:"20px"}} />
                                <small>599</small>
                            </Col>
                            <Col sm={3}>
                                <BsUpload style={{fontSize:"20px"}} />
                                <small></small>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>

            <Row  className = "tweetPosts d-flex flex-row mt-2 pb-2 pt-2 changebg" >
                <Col sm={1}>
                    <Image className="userPhoto" src="../../images/hamzaPic.jpeg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>Doland Trump </p>
                        <GoVerified className="go" />
                        <small>@dolandTrump</small>
                        <small>. 11m ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal className="iconhori" />
                </Col>

                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tenetur! Veniam nisi amet odio magnam beatae error exercitationem corporis tenetur blanditiis tempora, nobis, voluptates ipsam, ex a porro eius ratione?</p>
                        <Image src="../../images/pic2.jpg" alt="User Image Here" className="uploadPic" width="100%" height="300px" style={{borderRadius : "10px" , marginTop : "10px"}}/>
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
                    <Image className="userPhoto" src="../../images/hamzaPic.jpeg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>Bol News Entertainment  </p>
                        <GoVerified  className="go" />
                        <small>@bolentertainment .</small>
                        <small>3h ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal className="iconhori" />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                        <p className="para" >Hareem Shah Involved In Controversy...</p>
                        <Image src="../../images/pic3.jpg" alt="User Image Here" className="uploadPic" width="100%" height="300px" style={{borderRadius : "10px" , marginTop : "10px"}}/>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px"}} >
                        <Row className="tweetsReply" >
                            <Col sm={3}>
                                <BiMessageRounded style={{fontSize:"20px"}} />
                                <small>1k</small>
                            </Col>
                            <Col sm={3}>
                                <FaRetweet style={{fontSize:"20px"}}/>
                                <small>970</small>
                            </Col>
                            <Col sm={3}>
                                <BsHeart style={{fontSize:"20px"}} />
                                <small>289</small>
                            </Col>
                            <Col sm={3}>
                                <BsUpload style={{fontSize:"20px"}} />
                                <small></small>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
        
            <Row  className = "tweetPosts d-flex flex-row mt-3 mb-4 pb-2 pt-2 changebg" >
                <Col sm={1}>
                    <Image src="../../images/hamzaPic.jpeg" width="55px" height="55px" style={{borderRadius : "50px"}} alt ="User Image" />
                </Col>
                <Col sm={10}>
                    <div  className="d-flex flex-row persInfo">
                        <p>Reham Khan  </p>
                        <GoVerified  className="go" />
                        <small>@rehaaamkhan789 .</small>
                        <small>7h ago</small>
                    </div>
                </Col>
                <Col sm={1}>
                    <FiMoreHorizontal className="iconhori" />
                </Col>
                <Row>
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px" , marginTop : "-30px" }} >
                        <p className="para">Keywords in recent speeche and interviews hint at what will Pakistan and Afghanstan will do in future!!  Go figure out must...</p>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={1} style={{  marginLeft : "20px"}}>
                    </Col>
                    <Col sm={11} style={{ marginLeft : "70px"}} >
                        <Row className="tweetsReply" >
                            <Col sm={3}>
                                <BiMessageRounded style={{fontSize:"20px"}} />
                                <small>855</small>
                            </Col>
                            <Col sm={3}>
                                <FaRetweet style={{fontSize:"20px"}}/>
                                <small>68</small>
                            </Col>
                            <Col sm={3}>
                                <BsHeart style={{fontSize:"20px"}} />
                                <small>94</small>
                            </Col>
                            <Col sm={3}>
                                <BsUpload style={{fontSize:"20px"}} />
                                <small></small>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
        
        </>
    )
}

export default UserTweets
