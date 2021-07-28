import React from 'react'
import Navbar from '../NavbarHome';
import { Col, Row} from 'react-bootstrap'
import SidebarDet from '../SidebarLinks';
import RightSide from './RightSideHome';
import UserTweets from '../tweets/UserTweets';


function Home() {
    return (
        <>
            <Navbar />

            <div className="home">
                <Row >
                <Col  className="first">
                    <SidebarDet/>
                </Col>
                <Col className="second"  >
                    <UserTweets/>
                </Col>
                <Col className="third" >
                    <RightSide/>
                </Col>
            </Row>

            </div>

        </>
    )
}

export default Home
