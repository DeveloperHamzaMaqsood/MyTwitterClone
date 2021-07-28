import React from 'react'
import Sidebar from '../Sidebar';
import MiddleNav from './MiddleNav';
import Trends from '../Trends';
import {
    Col,
    Row
} from 'react-bootstrap'


function NotiNavbar() {
    return (
        <>
            <div  className = "mainHeader " >
              <Row >
                <Col  className="nav_first" >
                  <Sidebar/>
                </Col>
                <Col className = "nav_sec" >
                  <MiddleNav/>
                </Col>
                <Col className = "nav_third" >
                  <Trends/>
                </Col>
              </Row>
            </div>
        </>
    )
}

export default NotiNavbar
