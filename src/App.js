import React, {useState,useEffect} from 'react';
import './App.css';
import {Input, FormControl} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from './components/Message';
import db from './firebase';
import { IconButton } from '@material-ui/core';

import firebase from 'firebase';
function App() {

  const valueChange = (e)=>{setInput(e.target.value)};
  const  [input, setInput] = useState('');
  const [messages, setMessages] = useState(['']);
  const [username, setUsername] = useState('');
  console.log(messages);
  const sendMessage = (e)=>{
    e.preventDefault();
    db.collection("messages").add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages,{username:username,text:input}]);
    setInput('');
    
  }
  useEffect(() => {
     db.collection("messages").orderBy('timestamp','desc').onSnapshot(snapshot =>{
       setMessages(snapshot.docs.map(doc=>doc.data()))
     })
   
  }, [])
useEffect(() => {
  setUsername(prompt("Please enter your username"));

}, [])


  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt=""/>
     <h1>Messenger Web App</h1>
  <h2>welcome {username}</h2>
     <form className="app__form">
       <FormControl className="app__formcontrol">
         
       {/* <InputLabel value="Type your message">Enter your Message...</InputLabel> */}
     <Input className="app__input input__form" placeholder="Enter your message..." value={input} onChange = { valueChange} />

     <IconButton className="app__icon" variant="contained" color="white" disabled={!input} type="submit" onClick={sendMessage}><SendIcon/></IconButton>
     
     </FormControl>
     </form>
     { messages.map(message => {
        return <Message username={username} message={message} />


     })}
    </div>
  );
}

export default App;
