import React from 'react'
import {Avatar, Box, Button, TextField} from "@mui/material";
import HorizontalLine from "../../Utils/HorizontalLine";


const Chat = () => {
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
                        <Avatar className="mx-2"/>
                        <div className="d-flex flex-column">
                            <p className="m-0">UserName</p>
                            <p className="m-0">Active time</p>
                        </div>
                    </div>
                    <div className="mx-3">
                        <Button className="pt-2" style={{backgroundColor:"blueviolet"}} variant="contained">Sign Out</Button>
                    </div>
                </div>
                <HorizontalLine color={"blue"}/>
                <div className="text-black d-flex justify-content-center align-items-center"
                     style={{width: "100%", height: "27rem"}}>
                    chat space...
                </div>
                <div className="px-3 d-flex flex-row text-black align-items-center">
                    <TextField label="Enter message here..." variant="standard" fullWidth/>
                    <i  className="fa-2x pt-2 fa-solid fa-paper-plane"/>
                </div>
            </Box>
        </div>
    )
}

export default Chat
