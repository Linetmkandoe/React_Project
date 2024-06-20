import { useGetUsers } from '../Users/hooks/useGetUsers';
import './index.css';
import { useState } from 'react';
import { login } from "./utils"


const Login = () =>{
    
    
    const [username, setUserName] = useState("");
    const [password,setPassword] = useState("");
    console.log({username});
    console.log({password});

    const handleLogin = async (event) =>{
        event.preventDefault();
        const result = await login({username,password});
        console.log({result});
    };
    return(
        <div className='log'>
            <form onSubmit={handleLogin}>
              <button type="submit">Login</button>
              <input placeholder="EnterUsername" type="text" onChange={(event)=>setUserName(event.target.value)}/>
              <input placeholder="EnterPassword" type="password" onChange={(event) =>setPassword(event.target.value)}/>
            </form>
        </div>
    )

} 
export default Login;
