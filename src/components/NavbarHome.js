import React from 'react'
import Sidebar from './Sidebar';
import Tweets from './Twitter';
import Trends from './Trends';
import { Col , Row} from 'react-bootstrap'


function NavbarHome() {
    return (
        <>
            <div  className = "mainHeader" >
              <Row >
                <Col  className="nav_first" >
                  <Sidebar/>
                </Col>
                <Col className = "nav_sec" >
                  <Tweets/>
                </Col>
                <Col className = "nav_third" >
                  <Trends/>
                </Col>
              </Row>
            </div>
        </>
    )
}

export default NavbarHome
