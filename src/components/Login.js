import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login({currentUserId, setCurrentUserId, setUser}){
    const [inputFields, setInputFields] = useState({
        username: "",
        password: "",
    });
    function getInput(event) {
        setInputFields({
            ...inputFields,
            [event.target.name]: event.target.value,
        });
    }

    async function loginUser(event) {
        event.preventDefault();
    
        let userInfo = {
          username: inputFields.username,
          password: inputFields.password
        };
    

        let data= await fetch("http://192.168.1.126:8000/login", {
            headers: {
                "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(userInfo),
        }).then((response) => response.text()); 

        if (data!=0){
            window.localStorage.setItem( "userId", data);
            setCurrentUserId(data);
            window.localStorage.setItem( "username", userInfo.username);
            setUser(userInfo.username);
        }
    }
  
    

    return currentUserId > 0 ? (<Navigate to ={"/home" }/>) :  (
        <div>
        
            <form onSubmit={loginUser}>
                Username:{" "}
                <input
                type="text"
                name="username"
                placeholder="username"
                value={inputFields.username}
                onChange={getInput}
                required/>
                <br></br>
                Password:{" "}
                <input
                type="password"
                name="password"
                placeholder="password"
                value={inputFields.password}
                onChange={getInput}
                required/>
                <br></br>
                <button type ="submit">Login</button>
            </form>
        </div>
    );
}