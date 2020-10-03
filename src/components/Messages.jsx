import React from 'react'
import { Context } from '../Global/Context';
import Input from './Input'

const Messages = () => {
    const {allMsg, user} = React.useContext(Context);
   
    return (
      <div className="messages ">
        <>
          {allMsg.map(message => 
            message.email === user.email ? 
              <div key={message.id} className="messages_container2 d-flex justify-content-end">
                <div className="messages_content2">
                  <p className="messages_content2_msg text-right">
                    {message.msg}
                  </p>
                </div>
              </div> 
            : 
              <div key={message.id} className="messages_container d-flex ">
                <div className="messages_img">
                  <img src={message.photo} alt="img user" />
                </div>
                <div className="messages_msg">
                  <span className="font-weight-bold messages_msg_name">
                    {message.username}
                  </span>
                  <p className="mb-0 messages_msg_content">
                    {message.msg}
                  </p>
                </div>
              </div>
          )}
        </>
        <Input/>
      </div>
    );
}

export default Messages
