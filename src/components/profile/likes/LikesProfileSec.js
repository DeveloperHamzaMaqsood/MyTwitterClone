import React from 'react'
import {Row , Col, Button , Image} from 'react-bootstrap'
import {BiCalendar} from 'react-icons/bi'
import People from './LikesRetweet'
import {Link} from 'react-router-dom'

function ProfileSec() {
    return (
        <>
            <div className="profile">
                <Row>
                    <Col sm={12} className="darkArea">
                        <Image src="../../images/pic4.jpg" width="100%" height ="200px" alt="User Cover Photo"  className="userCoverPhoto"  />
                    </Col>
                </Row>


                <Row className="ProfileIcon" >
                    <Col sm={6}>
                        <Image src="../../images/hamzaPic.jpeg" alt="User Pic"  width="140px"  height="140px" className="UserImage" />
                    </Col>
                    <Col sm={6} >
                        <Button className="followUserBtn" >Set up Profile</Button>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6}>
                        <div className="d-flex flex-column userInfo">
                            <h5>Hamza  Maqsood</h5>
                            <h6>@HamzaMa99960551</h6>
                            <div className="d-flex flex-row mb-0">
                                <BiCalendar style={{fontSize : "20px" , marginRight:"5px"}}/>
                                <p>Joined Jan 2021</p>
                            </div>
                            <p style={{marginTop : "-10px"}} >
                                <span style={{fontWeight : "bold" }}>146</span> Followers
                                <span style={{fontWeight : "bold" , marginLeft : "10px"}} >5</span> Following
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="tweetsSec" style={{cursor:"pointer"}} >
                    <Col sm={3}>
                        <Link  to = "/profile"
                        style = {
                            {
                                textDecoration: 'none'
                            }
                        } >
                            <h6 className="h44"  >Tweets</h6>
                        </Link>
                    </Col>
                    <Col sm={3}>
                        <Link  to = "/profile/reply"
                        style = {
                            {
                                textDecoration: 'none'
                            }
                        } >
                        <h6 className="h44 h441" >Reply</h6>
                        </Link>
                    </Col>
                    <Col sm={3}>
                        <Link  to = "/profile/retweet"
                            style = {
                                {
                                    textDecoration: 'none'
                                }
                            } >
                            <h6 className="h44 h442" >Media</h6>
                        </Link>
                    </Col>
                    <Col sm={3}>
                        <Link  to = "/profile/likes"
                        style = {
                            {
                                textDecoration: 'none'
                            }
                        } >
                            <h6 className="h44 h443"  style={{textDecoration:"underline", color : "#1DA1F2" ,  textDecorationThickness: "4px" ,  textUnderlineOffset: "10px" , textDecorationColor : "#1DA1F2"}}>Likes</h6>
                        </Link>
                    </Col>
                </Row>

                <People/>
                
            </div>
        </>
    )
}

export default ProfileSec
