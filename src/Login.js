import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth,provider } from "./firebase"
import {actionTypes} from "./reducer"
import { useStateValue } from './StateProvider'

function Login() {

    const [state ,dispatch] = useStateValue();


    const signIn=() =>{
        auth.signInWithPopup(provider)
        .then((result)=>{

            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })

            console.log(result.user);
        })
        .catch((error)=> alert (error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img src = "download.png"/>
                <h1 style={{
                    color:'#2e81f4'
                }}>facebook</h1>
            </div>
            <Button type="submit" onClick={signIn}>
            Sign In
            </Button>
        </div>
    )
}

export default Login
