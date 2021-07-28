import React from 'react'

function AlreadyChatted() {
    return (
        <>
            <div  className = "messageAlready d-flex flex-column  align-items-center" >
                <h5>You don’t have a message selected</h5>
                <p style={{textAlign:"center" , fontSize:"15px" ,  fontFamily: 'Roboto'}} >Choose one from your existing messages, or start a new one.</p>
                <button className="btn">New message</button>
            </div>
        </>
    )
}

export default AlreadyChatted
