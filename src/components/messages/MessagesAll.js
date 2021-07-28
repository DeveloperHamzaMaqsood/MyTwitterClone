import React from 'react'
import MesgNavbar from './MessNavbar'
import SidebarLinks from '../SidebarLinks'
import {Row , Col} from 'react-bootstrap'
import Message from './Newmsg'
import MessageAlready from './AlreadyChatted';

function MessagesAll() { 
    return (
        <>
            <MesgNavbar/>

            <Row  className = "msgMain" >
            <Col className="m_msg_first"  >
                <SidebarLinks />
            </Col>
            <Col  className = "m_msg_sec" >
                <Message/>
            </Col>
            <Col  className = "m_msg_third" >
                <MessageAlready/>
            </Col>
        </Row>
        </>
    )
}

export default MessagesAll
