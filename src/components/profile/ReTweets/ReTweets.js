import React from 'react'
import {Row , Col} from 'react-bootstrap'
import UserNavbar from '../ProfileNavbar'
import SidebarLinks from '../../SidebarLinks'
import Right from '../RightSide'
import Profile from './RetweetProfileSec';

function UserProfile() {
    return (
        <>
            <UserNavbar/>

            <div  className = "mainProfile" >
                <Row >
                <Col  className="nav_first" >
                  <SidebarLinks/>
                </Col>
                <Col className = "nav_sec" >
                  <Profile/>
                </Col>
                <Col className = "nav_third" >
                  <Right/>
                </Col>
              </Row>
            </div>
        </>
    )
}

export default UserProfile
