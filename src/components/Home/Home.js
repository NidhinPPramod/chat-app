import React, {useState} from 'react'
import AnimatedBackground from "../../Utils/AnimatedBackground";
import UserContext from "../Context/UserContext";

const Home = () => {

    const[user,setUser]=useState(null)

    return (
        <div>
            <UserContext.Provider value={{user,setUser}}>
                <AnimatedBackground/>
            </UserContext.Provider>
        </div>
    )
}

export default Home
