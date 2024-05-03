import React, { useState } from 'react'
import "./chat.scss"
function Chat() {
    const [chat, setChat] = useState(null);
  return (
    <div className='chat'>
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Lewis Ouma</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Lewis Ouma</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>

        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Lewis Ouma</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Lewis Ouma</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
      {chat == null ? (
        <div className="chatBox">
        <div className="top">
            <div className="user">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                Lewis Ochola
            </div>
            <span className='close' onClick={()=>setChat(!null)}>X</span>
        </div>
        <div className="center">
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, cum.</p>
                <span>3hrs ago</span>
            </div>

            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, cum.</p>
                <span>3hrs ago</span>
            </div>

            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, cum.</p>
                <span>3hrs ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, cum.</p>
                <span>3hrs ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, cum.</p>
                <span>3hrs ago</span>
            </div>
            v
        </div>
        <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
        </div>
      </div>
      ):""}
    </div>
  )
}

export default Chat
