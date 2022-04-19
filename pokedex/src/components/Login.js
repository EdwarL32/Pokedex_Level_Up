import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
const Login = () => {

   
    const [ userName, setUserName ] = useState("");
    
    const dispatch = useDispatch();

 
    const navigate = useNavigate();

    
    const submit = e =>{
        e.preventDefault();
        console.log(userName)
       
        dispatch({ 
            type: "GET_USERNAME",
            payload: userName
        })
        
        setUserName("")

       
        navigate("/pokemons");
    }

    return (
        <div>
           
            <form action="" onSubmit={submit}>
                <input className='header__search-input'
                    type="text"
                    placeholder='User'
                    value={userName} 
                    onChange={e => setUserName(e.target.value)}
                    required
                />
                <button className='button_success' > <i className="fas fa-share"></i>Iniciar</button>
                
            </form>
        </div>
    );
};

export default Login;