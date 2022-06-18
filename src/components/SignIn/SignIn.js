import React from 'react'
import {Box} from "@mui/material";
import {Button} from "@material-ui/core";
import GoogleIcon from '@mui/icons-material/Google';

const SignIn = () => {
    return (
        <>
            <div>
                <Box sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    color:"black",
                    padding:"1rem"
                }}
                >
                    <h1 className="my-4">Chat App</h1>
                    <Button style={{backgroundColor:"black"}} className="mt-5 text-white" variant="outlined" startIcon={<GoogleIcon/>}>
                       Sign in to continue
                    </Button>
                </Box>

            </div>
        </>
    )
}

export default SignIn
