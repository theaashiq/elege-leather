import React, { createContext, useContext } from 'react'
import './notification.css'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Translate } from '@mui/icons-material';

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
                        Please sign in to add this product to your cart or to purchase it.
                    </p>
                    <Link to='/signIn' style={{textDecoration:"none"}}>
                        <div className='modal-sign-btn'>
                            Sign In
                        </div>   
                    </Link>
                </div>
            </div>
        </>
    )
}

const NotificationContext = createContext()
console.log(NotificationContext)

export const useNotification = () => {
    const context = useContext(NotificationContext)
    if(!context) {
        throw new Error('useNotification must be used within a NotificationProvider')
    }
    return context;
}

export const PopUpNotificationProvider = ({ children }) => {
    const notify = (message) => {
        toast.success(message)
    }

    const notifyWarning = (message) => {
        toast.warning(message)
    }

    const notifyError = (message) => {
        toast.error(message)
    }
    return (
        <NotificationContext.Provider value={{ notify, notifyError, notifyWarning }}>
            
                <ToastContainer
                    position='top-center' 
                    hideProgressBar 
                    autoClose={1000} 
                    closeButton={false}
                    className="my-toast-container"
                    style={{
                        maxWidth: '220px',
                        height: '10px',
                        textAlign: 'center',
                        postion: 'absolute',
                        top: '10px',
                        margin: 'auto',
                        left: 0,
                        right: 0,
                        transform: 'translateY(-50%)',
                        borderRadius: '20px',
                        fontFamily:'Open sans'
                    }}
                />
            {children}
        </NotificationContext.Provider>
    )
}