import React from 'react'; 
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DataService from '../../services/dataService';


function EditeUser (){ 

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [status, setStatus] = useState();
    // const [id, setId] = useState(useParams());
    let { id } = useParams() ;
    
    const history = useHistory();
    

    useEffect(()=>{
        
        console.log(id);
        DataService.getUserById(id).then(result => {
            if (result.data.length=== 0) {
                window.location.reload();
                history.push('/home');
            }
            console.log(result.data[0]);
            setName(result.data[0].name);
            setEmail(result.data[0].email);
            setStatus(result.data[0].select);
        });
    }, [setName, setEmail]);

    const handleSubmit= (e) => {
        e.preventDefault();
        DataService.updateUser(id, {name, email, status}).then(result=>{
            if (result.status === 200) {
                history.push('/home');
            }
        })
    }

    return <div className="lis-user">
        
        <div className="list form-add">
        <h4 className="">Edite user</h4>
        <hr/>
        <br/><br/>
            <form onSubmit={e => {handleSubmit(e)}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" name="name" value={name || ''} onChange={e => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Eamil</label>
                    <input type="email" name="email" value={email || ''} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <select name="status" defaultValue={status} onChange={e => setStatus(e.target.value)} id="">
                        <option value="actived">Activer</option>
                        <option value="deactived">Desacctiver</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>    
            </form>
        </div>
    </div>
}

export default EditeUser; 
