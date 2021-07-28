import React from 'react'
import NotiNavbar from './NotiNavbar'
import {Row , Col} from 'react-bootstrap'
import SidebarDet from '../SidebarLinks'
import RightSide from '../home/RightSideHome'
import Section_2 from './Sections_2'
 
function NotificationsAll() {
    return (
        <>
            <NotiNavbar />

            <div className="home">
                <Row >
                    <Col style={{maxWidth : "21%"  }}>
                        <SidebarDet/>
                    </Col>
                    <Col  style = {{maxWidth: "49%", backgroundColor:"white" , marginLeft : "8px" , marginRight:"13px"}} >
                        <Section_2/>
                    </Col>
                    <Col Col style = {{maxWidth: "30%",}} >
                        <RightSide/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default NotificationsAll
