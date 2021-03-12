import React from 'react'; 
import { useState, useEffect } from 'react';
import DataService from '../../services/dataService';

function ListUser (){ 

    const [listUser, setListUser] = useState([]);

    function getData(){
        DataService.getAllUser().then(result => {
            if (result) {
                setListUser(result.data);
                console.log(result.data);
            }
        });
    }

    useEffect(() => {
        console.log('mounted');
        getData();
    }, [setListUser]);


    return <div className="lis-user">

        <section className="form-add">
        </section>

        <div className="row">
            <div class="input-group col-md-4">
                <input class="form-control py-2" type="search" value="search" id="example-search-input" />
                <span class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                        <i class="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </div>
        <section className="list">
        <table class="table">
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
                    listUser.map( user =>
                        <tr>
                            <th scope="row">1</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.id}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </section>
    </div>
} 
  
export default ListUser; 
