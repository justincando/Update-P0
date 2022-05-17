import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login({currentUserId, setCurrentUserId, setUser}){

    return(
        <>
        <form>
            Username:{" "}
            <input
            type="text"
            placeholder="username"
            // value={inputFields.username}
            // onChange={getInput}
            required/>
            <br></br>
            Password:{" "}
            <input
            type="password"
            placeholder="password"
            // value={inputFields.password}
            // onChange={getInput}
            required/>
            <br></br>
            <button type ="submit">Login</button>
        </form>
        </>
    );
}