import React from 'react'
import NotiNavbar from './NotiNavbar'
import {Row , Col} from 'react-bootstrap'
import SidebarDet from '../SidebarLinks'
import RightSide from '../home/RightSideHome'
import Section from './Sections_1'

function NotificationsAll() {
    return (
        <>
            <NotiNavbar />

            <div className="home">
                <Row >
                <Col  className="first" >
                    <SidebarDet/>
                </Col>
                <Col className = "second" >
                    <Section/>
                </Col>
                <Col  className = "third" >
                    <RightSide/>
                </Col>
            </Row>

            </div>
        </>
    )
}

export default NotificationsAll
