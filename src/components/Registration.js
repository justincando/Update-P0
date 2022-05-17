import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function Registration(){
    const [register, setRegister] = useState(false);
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

    async function createUser(event){
        event.preventDefault();
        let userInfor ={
            username: inputFields.username,
            password: inputFields.password,
        };
        await fetch("http://192.168.1.126:8000/user", {
            headers:{
                "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(userInfor),
        }).then((response) => response.json());

        setRegister(true);
    }
    return window.localStorage.getItem("userId") > 0? (<Navigate to ="/login"/>):
    (register ? (<Navigate to = "/login"/>):(
        <div>
            <form onSubmit={createUser}>
                Username:{" "}
                <input
                type = "text"
                name="username"
                placeholder="Username"
                value={inputFields.username}
                onChange={getInput}
                required/>
                <br></br>
                Password:{" "}
                <input
                type="password"
                name="password"
                placeholder="Password"
                value={inputFields.password}
                onChange={getInput}
                required/>
                <br></br>
                <button type="submit">Submit</button>

            </form>
        </div>
    ));
}