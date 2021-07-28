import React from 'react'
import {Row, Col} from 'react-bootstrap';
import {FiMoreHorizontal} from 'react-icons/fi'
import Details from '../home/TrendsDetails';

function ToFollow() {
    return (
        <>
            <div  className = "toFollow" >
                <Row>
                    <Col sm={12} >
                        <h5 style={{fontWeight: '900'}}>Trends For You</h5>
                    </Col>
                </Row>

                {
                    Details.map(({id , name , tweets}) => (
                        <Row>
                    <Col sm={12} key={id}>
                        <div className="d-flex flex-column mt-2 pt-2" style={{borderTop : "1px solid silver"}} >
                            <div className="row">
                                <div className="col-11">
                                    <small style={{color : "#808e9b" , fontFamily: 'Roboto'}}>Trending in Pakistan</small>
                                </div>
                                <div className="col-1">
                                    <FiMoreHorizontal className="RightSideHome_Icon" style={{color : "#808e9b"}} />
                                </div>
                            </div>
                            <small className = "boldName "  style={{marginTop :"-10px", fontWeight : "700"}}>{name}</small>
                            <small style={{color : "#485460" , fontFamily: 'Roboto'}} className="spane2">{tweets} tweets</small>
                        </div>
                    </Col>
                </Row>
                    ))
                }
            </div>
        </>
    )
}

export default ToFollow
