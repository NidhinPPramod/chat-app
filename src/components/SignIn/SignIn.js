import React, {useContext, useEffect} from 'react'
import {Box} from "@mui/material";
import {Button} from "@material-ui/core";
import GoogleIcon from '@mui/icons-material/Google';
import {GoogleAuthProvider,signInWithPopup,onAuthStateChanged} from 'firebase/auth'
import {auth}from "../../Firebase/config"
import UserContext from "../Context/UserContext";

const SignIn = () => {

    const{setUser}=useContext(UserContext)

    useEffect(()=>{
        onAuthStateChanged(auth,async (currentuser)=>{
            setUser(currentuser)
        })
    },[])


    const SignInWithGoogle=()=>{
        const provider=new GoogleAuthProvider()
        signInWithPopup(auth,provider).then((response)=>{
            const name=response.user.displayName
            const email=response.user.email
            const profPic=response.user.photoURL

            localStorage.setItem("name",name)
            localStorage.setItem("email",email)
            localStorage.setItem("profilePic",profPic)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
            <div>
                <Box className="col-sm-12" sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    color:"black",
                    padding:"1rem"
                }}
                >
                    <h1 style={{fontWeight:"900"}} className="my-4">Chat App</h1>
                    <Button onClick={SignInWithGoogle} style={{backgroundColor:"black"}} className="mt-5 text-white" variant="outlined" startIcon={<GoogleIcon/>}>
                       Sign in to continue
                    </Button>
                </Box>

            </div>
        </>
    )
}

export default SignIn
