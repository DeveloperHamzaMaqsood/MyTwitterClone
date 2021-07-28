import React from 'react'
import {Row, Col} from 'react-bootstrap';
import Sidebar from '../Sidebar'
import Trends from '../Trends'
import MidlleNav from './MiddleNavProfile'

function Bookmarksnav() {
    return (
        <>
            <div  className = "mainHeader" >
           <Row >
                <Col  className="nav_first" >
                  <Sidebar/>
                </Col>
                <Col className = "nav_sec" >
                  <MidlleNav/>
                </Col>
                <Col className = "nav_third" >
                  <Trends/>
                </Col>
              </Row>
            
        </div>
        </>
    )
}

export default Bookmarksnav
