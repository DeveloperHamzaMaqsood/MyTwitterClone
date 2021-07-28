import React from 'react'
import {Row, Col} from 'react-bootstrap';
import Sidebar from '../Sidebar';
import MiddleNav from './MiddleNav';

function Explorenavbar() {
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
                  
                </Col>
              </Row>
            </div>
        </>
    )
}

export default Explorenavbar
