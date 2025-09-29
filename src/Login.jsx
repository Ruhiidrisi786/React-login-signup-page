import { useState } from "react";
import "./Login.css"

function Login(){
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            <div className="container">
                <div className="form-box">
                    <div className="btn">
                        <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)} >Login</button>
                        <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Signup</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;