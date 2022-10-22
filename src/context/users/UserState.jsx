import { useState } from 'react'
import UserContext from "./UserContext";

const UserState = (props) => {
    const host = import.meta.env.VITE_BACKEND_URL;
    const [user, setUser] = useState([]);

    //Get user data
    const getUser = async () => {
        //API Call
        const response = await fetch(`${host}/api/auth/getuserdata`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("token")
            },
        });
        const json = await response.json();
        setUser(json.fname);
    }
    return (
        <UserContext.Provider value={{ user, getUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;