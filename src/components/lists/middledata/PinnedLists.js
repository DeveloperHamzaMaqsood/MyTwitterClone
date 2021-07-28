import React from 'react'
import {Row , Col} from 'react-bootstrap'

function PinnedLists() {
    return (
        <>
            <Row className="pinned bgWhite mb-3" >
                <Col sm={12} style={{borderBottom : "1px solid grey" , paddingBottom : "10px" , paddingTop : "10px" }}>
                    <h5 style={{ fontWeight : "900"}}>Pinned Lists</h5>
                </Col>
                <Col sm={12} className="pinnedpara">
                    <p className="Paragraph" >
                        Nothing to see here yet— pin your favorite Lists to access them quickly.
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default PinnedLists
