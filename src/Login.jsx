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
                
            
            {isLogin ? <>
                <div>
                    <h2>Login Form</h2>
                    <input type="text" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <p className="forgot-password">Forgot password?</p>
                    <button className="login-btn">Login</button>
                    <p className="bottom">Not a member? <a href="#" onClick={() => setIsLogin(false)}>Signup now</a></p>
                </div>
            </> : 
                <>
                <div>
                    <h2>Signup Form</h2>
                    <input className="signup-input" type="text" placeholder="Email Address"/>
                    <input className="signup-input" type="password" placeholder="Password" />
                    <input className="signup-input" type="password"  placeholder="Confirm password"/>
                    <button className="signup-btn">Signup</button>
                </div>
                </>
            }
                </div>
            </div>
        </>
    )
}

export default Login;