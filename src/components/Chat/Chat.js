import React, {useContext, useEffect, useState,useRef} from 'react'
import {collection,addDoc,getDocs,serverTimestamp,orderBy,query} from 'firebase/firestore';
import {Avatar, Box, Button, TextField} from "@mui/material";
import HorizontalLine from "../../Utils/HorizontalLine";
import SendIcon from '@mui/icons-material/Send';
import {signOut} from 'firebase/auth'
import {auth,db} from "../../Firebase/config"
import "./Chat.css"
import UserContext from "../Context/UserContext";


const Chat = () => {
    const messagesEndRef=useRef(null)

    const [msg, setMsg] = useState('')
    const [chat, setChat] = useState([])

    const{user}=useContext(UserContext)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }


    useEffect(()=>{
        const collectionref=collection(db,"messages")
        const q=query(collectionref,orderBy("createdAt"))
        getDocs(q).then((response)=>{
            const check=response.docs.map((obj)=>( {
                ...obj.data(),id:obj.id
            }))
           setChat(check)
        })
    },[chat])



    const signOutWithGoogle = () => {
        signOut(auth).then(() => {
            alert("Signed Out Successfully")
        })
    }

    const SendMessage =async () => {
        const collectionref=collection(db,"messages")
        await addDoc(collectionref,{message:msg,uid:localStorage.getItem("uid"),createdAt:serverTimestamp()})
        setMsg('')
        scrollToBottom()
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
                            <p style={{fontWeight: "900"}} className="m-0 ">{localStorage.getItem("name")}</p>
                            <p style={{fontWeight: "100", fontSize: ".75rem"}}
                               className="m-0">{localStorage.getItem("email")}</p>
                        </div>
                    </div>
                    <div className="mx-3">
                        <Button onClick={signOutWithGoogle} className="pt-2" style={{backgroundColor: "#4f41b8"}}
                                variant="contained">Sign
                            Out
                        </Button>
                    </div>
                </div>
                <HorizontalLine color={"#4f41b8"}/>
                <div className="chat-div text-black d-flex flex-column text-white overflow-scroll"
                     style={{width: "100%", height: "27rem"}}>
                    {chat.map((value,key) => {
                        return (
                            <div key={key} className={user.uid===value.uid?"sender":"receiver"}>
                                <div className={user.uid===value.uid?"sender-msg":"receive-msg"}>
                                    <div className="m-0 text-white">{value.message}</div>
                                </div>
                            </div>
                        )
                    })}
                    <div ref={messagesEndRef}/>
                </div>
                <div className="px-3 d-flex flex-row text-black align-items-center" >
                    <TextField label="Enter message here..." variant="standard" value={msg}
                               onChange={(event) => setMsg(event.target.value)} fullWidth/>
                    <SendIcon className="mt-3" onClick={SendMessage}/>
                </div>
            </Box>
        </div>
    )
}

export default Chat
