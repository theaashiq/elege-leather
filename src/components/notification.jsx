import React from 'react'
import './notification.css'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export const Modal = ({close}) => {
    return (
        <>
            <div className='modal'>
                <div className='modal-container'>
                    <div className='modal-header'
                         style={{
                            display: 'flex',
                            justifyContent:'space-between',
                            width:'100%',}}>
                        <span></span>
                        <p onClick={() => close(false)}>
                            <CloseIcon sx={{fontSize:'16px'}}/>
                        </p>
                    </div>
                    <p className='modal-container-content'>
                        Please Sign In to Add This Product to Your Cart
                    </p>
                    <Link to='/signIn'>
                        <div className='modal-sign-btn'>
                            Sign In
                        </div>   
                    </Link>
                </div>
            </div>
        </>
    )
}