import React from 'react'; 
import { useState, useEffect } from 'react';
import DataService from '../../services/dataService';
import { useHistory } from 'react-router-dom';

function ListUser (){ 

    const [listUser, setListUser] = useState([]);
    const [search, setSearch] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        console.log('mounted');
        getData();
    }, [setListUser]);


    const searche = (e) =>{
        setSearch(e.target.value);
        if (e.target.value != '') {
            DataService.search(e.target.value).then(result => {
                if (result) {
                    setListUser(result.data);
                    console.log(result.data);
                }
            });
        }else{
            getData();
        }
    }

    function getData(){
        DataService.getAllUser().then(result => {
            if (result) {
                setListUser(result.data);
                console.log(result.data);
            }
        });
    }

    const onAction = (id, action)=>{
        console.log(id);
        if (action === 'edite') {
            console.log('edite');
            history.push('/edite/'+id);
        }else{
            console.log('delete');
            DataService.deletUser(id).then(result => {
                if (result) {
                  getData();  
                }
            })
        }
    }

    return <div className="lis-user">
        <section className="form-add">
        </section>

        <div className="row row-search-form">
        <div className="input-group col-md-4 ml-auto">
            <input className="form-control py-2" onChange={e => searche (e)} type="search" placeholder="Search by name or email" value={search} id="example-search-input" />
            <span className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                    <i className="fa fa-search"></i>
                </button>
            </span>
        </div>
        <a href="/add" className="btn btn-primary col-md-2 ml-auto">
        <i className="far fa-plus-circle"></i> Add Users
        </a>
        </div>
        <section className="list">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    listUser.map( (user, i) =>
                        <tr key={i}>
                            <th scope="row">{user.name}</th>
                            <td>{user.email}</td>
                            <td>{user.status}</td>
                            <td>
                                <span className="btn" onClick={()=> onAction(user.id, 'edite')} ><i className="fal fa-pencil-alt"></i></span>
                                <span className="btn" onClick={()=> onAction(user.id, 'delete')}><i className="fal fa-trash-alt"></i></span>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </section>
    </div>
} 
  
export default ListUser; 
