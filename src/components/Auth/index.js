import { Button, Dialog, Input } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import "./style.css"
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../actions/authActions';
const Auth = (props) => {
    const userLogin = useSelector(state => state.userLogin);
    const user = useSelector(state => state.userInfo);
    const { loading, error, userInfo } = userLogin;
    console.log(user);
    const dispatch = useDispatch();
    const [type,setType] = useState('');
    const [open,setOpen] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() =>{
        if(props.type){
            setType(props.type);
        }
    },[]);

    useEffect(() =>{
        if(userInfo){
            handleClose();
        }
    },[userInfo]);

    

    
    const handleClickOpen = () =>{
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        handleClickOpen();
        
    }
    const signInHandler = (e)=>{
        e.preventDefault();
        dispatch(login(email, password));        
    }
    return (
        <div>
            <button className={`${type ==='signin'? 's-btn':'form-btn getStarted'}`} onClick={handleClickOpen}>
               {type==='signin'? 'Sign In':' Get Started'}
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <div className="formContainer d-flex flex-column align-items-center">
                <div className="closeIcon" onClick={handleClose}>
                    <CloseIcon/>
                </div>
                    <h2 className="">{type==='signin'? 'Sign In':'Join Medium.'}</h2>
                    <div className="d-flex flex-column align-items-center">
                        {
                            type !=='signin' && (
                                <>
                                    <label htmlFor="userName">Your Name</label>
                                    <input className="formInput" type="text" 
                                        onChange={e => setName(e.target.value)}
                                        value={name} name="userName" id="userName"
                                    />
                                </>
                        )}
                        <label htmlFor="email">Your Email</label>
                        <input className="formInput" onChange={e => setEmail(e.target.value)} type="email"
                            value={email} name="email" id="email" required                             
                        />
                        <label htmlFor="password">Your Password</label>
                        <input className="formInput" onChange={e => setPassword(e.target.value)}
                            type="password" value={password} name="password" id="password"
                        />
                    </div>
                    {
                        type ==='signin'? <button className="form-btn btn-submit" onClick={signInHandler}>Sign In</button>
                        :
                        <button className="form-btn btn-submit" onClick={submitHandler}>submit</button>
                    }
                    
                </div>
            </Dialog>
        </div>
    )
}

export default Auth;