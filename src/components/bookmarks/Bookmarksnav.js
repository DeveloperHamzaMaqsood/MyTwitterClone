import React from 'react'
import {Row, Col} from 'react-bootstrap';
import Sidebar from '../Sidebar'
import Trends from '../Trends'

function Bookmarksnav() {
    return (
        <>
            <div  className = "home " >
              <Row >
                <Col  className="first" >
                  <Sidebar/>
                </Col>
                <Col className = "second" >
                  <Row>
                        <Col sm={10}>
                            <div className="d-flex flex-column">
                                <h5 style={{fontWeight:"900"}}>Bookmarks</h5>
                                <small style={{marginTop : "-10px"}}>@Hamzamaq89577</small>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className = "third" >
                  <Trends/>
                </Col>
              </Row>
            </div>
        </>
    )
}

export default Bookmarksnav
