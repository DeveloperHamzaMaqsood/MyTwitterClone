import React from 'react'
import ExploreNavbar from './Explorenavbar';
import SidebarLinks from '../SidebarLinks';
import {Row , Col} from 'react-bootstrap'
import ExploreSide from './ExploreRightSide';
import Covid from './CovidSec';
import ToFollow from './ToFollow';
import ViralTweets from './ViralTtweets';
import ViralCric from './CricViralTweets';

function Explore() {
    return (
        <>
        <ExploreNavbar/>

        <div className="explore">
            <Row >
                <Col  className="first" >
                    <SidebarLinks/>
                </Col>
                <Col className = "second" >
                    <div className="userstoShow">
                        <Covid/>
                        <ToFollow/>
                        <ViralTweets/>
                        <ViralCric/>
                    </div>
                </Col>
                <Col  className = "third" >
                    <ExploreSide/>
                </Col>
            </Row>

                
        </div>


        </>
    )
}

export default Explore
