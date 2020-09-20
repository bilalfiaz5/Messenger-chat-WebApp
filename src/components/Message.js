import React from 'react'
import './message.css'
import {CardContent,Card,Typography} from '@material-ui/core'
const Message = ({message,username}) => {
    const isUser = username === message.username;    
    return (
        <div className= {`message__card ${isUser && 'message__user'} `}>  
<p className="user__name" >{message.username}</p>

<Card className={isUser ? "message__userCard":"message__guestCard"}>
      <CardContent >
    
      <Typography   component="h2" variant="h5">
          {message.message}
        </Typography>
        </CardContent>
    </Card>

            
        </div>
    )
};

export default Message;
