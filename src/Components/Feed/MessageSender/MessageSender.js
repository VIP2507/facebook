import React,{ useState } from 'react'
import './Massage.css'

import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { useStateValue } from '../../../StateProvider'
import db from '../../../firebase';
import firebase from 'firebase'

function MessageSender() {
    const [{user},dispatch]=useStateValue();
    const[input,setInput]= useState('')
    const[imageUrl,setImageUrl]= useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();

        db.collection("posts").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl,
        })

        setInput("");
        setImageUrl("")
    }

    return (
        <div className="massage">
                <div className="massage__top">
                    <Avatar src={user.photoURL}/>
                    <form>
                        <input
                            className="massage__input"
                            value={input}
                            onChange={(e)=>setInput(e.target.value)}
                            placeholder={`what's on your mind, ${user.displayName} ? `}/>
                        <input 
                            value={imageUrl}
                            onChange={(e)=>setImageUrl(e.target.value)}
                            placeholder={`image URL (Optional)`}/>
                        
                        <button onClick={handleSubmit} type="submit">
                            hide
                        </button>
                        
                    </form>
                </div>
               
                <div className="massage__bottom">
               
                    <div className="massage__option">
                        <VideocamIcon style={{color:'red'}}/>
                        <h3>Live Video</h3>
                    </div>
                    <div className="massage__option">
                        <PhotoLibraryIcon style={{color:'green'}}/>
                        <h3>Photo/Video</h3>
                    </div>
                    <div className="massage__option">
                        <InsertEmoticonIcon style={{color:'orange'}}/>
                        <h3>Feeling/Activity</h3>
                    </div>

                </div>
        </div>
    )
}
export default MessageSender;