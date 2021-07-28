import React from 'react'
import {Row , Col} from 'react-bootstrap';
import Navbar from './ListNav';
import SidebarLinks from '../SidebarLinks'
import Right from '../home/RightSideHome'
import Pinned from './middledata/PinnedLists';
import DiscoverList from './middledata/NewLists';

function BookmarksAll() {
    return (
        <>
            <Navbar/>

            <div  className = "home" >
            <Row >
                <Col className="first" >
                    <SidebarLinks/>
                </Col>

                <Col  className="second" >
                    <Pinned/>
                    <DiscoverList  />
                </Col>
                <Col  className="third">
                    <Right/>
                </Col>
            </Row>
            
        </div>
        </>
    )
}

export default BookmarksAll
