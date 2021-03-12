
import React from 'react'; 
import { useState } from 'react';
import AuthService from '../services/authService';
  
function Login (){ 
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit= (e) => {
        e.preventDefault();

        AuthService.login(username, password).then(result => {
            console.log(result);
        });
        
        console.log(username);
    }


    return <div className="form-conteiner">
            <form onSubmit={e => {handleSubmit(e)}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" name="username" value={username || ''} onChange={e => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" value={password || ''} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>    
            </form>
        
    </div>;
} 
  
export default Login; 
