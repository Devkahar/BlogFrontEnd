import { Button, Dialog, Input } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import "./style.css"
import CloseIcon from '@material-ui/icons/Close';
const Auth = (props) => {
    const [type,setType] = useState('');
    useEffect(() =>{
        if(props.type){
            setType(props.type);
        }
    },[])
    const [open,setOpen] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    
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
        handleClickOpen();
        
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
                    {type !=='signin' && (<><label htmlFor="userName">Your Name</label>
                    <input className="formInput" type="text" 
                    onChange={e => setName(e.target.value)}
                    name="userName" id="userName"/></>)}
                    <label htmlFor="email">Your Email</label>
                    <input className="formInput" onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" required />
                    <label htmlFor="password">Your Password</label>
                    <input className="formInput" onChange={e => setPassword(e.target.value)} type="password" name="password" id="password"/>
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