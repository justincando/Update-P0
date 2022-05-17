import {Link, Navigate} from "react-router-dom";
export default function Navbar({currentUserId, setCurrentUserId, setUser}){
    checkUser();
    function checkUser(){
        if(window.localStorage.getItem("userId") >= 0){
            setCurrentUserId(window.localStorage.getItem("userId"));
            setUser(window.localStorage.getItem("username"));
        }
        else{
            setCurrentUserId(0);
            setUser(0);
        }
    }
    function logout(){
        window.localStorage.clear();
        setCurrentUserId(0);
        setUser(0);
        return <Navigate to="/login"/>;
    }
    return currentUserId > 0 ?(
        <>
            
        </>
    ):(
        <>
        <Link to="/login">Login</Link>
        <Link to="/registration">Register</Link>
        </>
    );
}