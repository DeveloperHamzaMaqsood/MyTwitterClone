import React from 'react'
import {Row , Col} from 'react-bootstrap';
import Navbar from './Bookmarksnav';
import SidebarLinks from '../SidebarLinks'
import Right from '../home/RightSideHome'

function BookmarksAll() {
    return (
        <>
            <Navbar/>

            <div  className = "mainHeader"  >
            <Row >
                <Col  className="nav_first"  >
                    <SidebarLinks/>
                </Col>
                <Col className = "nav_sec">
                    <div className="d-flex flex-column bookmarkssec">
                        <h5>You haven’t added any Tweets to your Bookmarks yet</h5>
                        <p>When you do, they’ll show up here.</p>
                    </div>
                </Col>
                <Col  className = "nav_third" >
                    <Right/>
                </Col>
            </Row>
            
        </div>
        </>
    )
}

export default BookmarksAll
