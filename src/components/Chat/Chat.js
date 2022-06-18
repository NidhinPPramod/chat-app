import React from 'react'
import {Avatar, Box, Button, TextField} from "@mui/material";
import HorizontalLine from "../../Utils/HorizontalLine";
import {signOut} from 'firebase/auth'
import {auth} from "../../Firebase/config"
import "./Chat.css"


const Chat = () => {

    const signOutWithGoogle=()=>{
        signOut(auth).then(()=>{
            alert("Signed Out Successfully")
        })
    }

    return (
        <div>
            <Box sx={{
                width: "63rem",
                height: "37rem",
                backgroundColor: "white",
                paddingTop: "1rem",
                borderRadius: "1rem"
            }}>
                <div className="w-100 d-flex flex-row justify-content-between mx-1">
                    <div className="d-flex flex-row justify-content-start">
                        <Avatar className="mx-2" src={localStorage.getItem("profilePic")}/>
                        <div className="d-flex flex-column align-items-start ">
                            <p style={{fontWeight:"900"}} className="m-0 ">{localStorage.getItem("name")}</p>
                            <p style={{fontWeight:"100",fontSize:".75rem"}} className="m-0">{localStorage.getItem("email")}</p>
                        </div>
                    </div>
                    <div className="mx-3">
                        <Button onClick={signOutWithGoogle} className="pt-2" style={{backgroundColor: "#4f41b8"}} variant="contained">Sign
                            Out
                        </Button>
                    </div>
                </div>
                <HorizontalLine color={"#4f41b8"}/>
                <div className="text-black d-flex flex-column text-white"
                     style={{width: "100%", height: "27rem"}}>
                    <div className="receiver">
                        <div className="receive-msg">
                            <div className="m-0 text-white">sender message</div>
                        </div>
                    </div>
                    <div className="receive">
                        <div className="receive-msg">
                            <p className="m-0 text-white">sender message..</p>
                        </div>
                    </div>
                    <div className="sender">
                        <div className="sender-msg">
                            <p className="m-0 text-white">sender message..</p>
                        </div>
                    </div>
                </div>
                <div className="px-3 d-flex flex-row text-black align-items-center">
                    <TextField label="Enter message here..." variant="standard" fullWidth/>
                    <i className="fa-2x pt-2 fa-solid fa-paper-plane"/>
                </div>
            </Box>
        </div>
    )
}

export default Chat
