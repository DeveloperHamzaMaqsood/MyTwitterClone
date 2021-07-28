import React from 'react'
import {Row , Col} from 'react-bootstrap'
import UserNavbar from '../ProfileNavbar'
import SidebarLinks from '../../SidebarLinks'
import Right from '../RightSide'
import Profile from './LikesProfileSec';

function UserProfile() {
    return (
        <> 
            <UserNavbar/>

            <div  className = "home" >
                <Row >
                <Col  className="first" >
                  <SidebarLinks/>
                </Col>
                <Col className = "second" >
                  <Profile/>
                </Col>
                <Col className = "third" >
                  <Right/>
                </Col>
              </Row>
                
            </div>
        </>
    )
}

export default UserProfile
