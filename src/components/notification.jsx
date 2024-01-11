import React, { createContext, useContext } from 'react'
import './notification.css'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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
    return (
        <NotificationContext.Provider value={{ notify }}>
            
                <ToastContainer
                    position='top-center' 
                    hideProgressBar 
                    autoClose={1000} 
                    closeButton={false}
                    className="my-toast-container"
                    
                    style={{
                        width:'200px',
                        height: '10px',
                        textAlign: 'center',
                        borderRadius: '20px',
                        fontFamily:'Open sans'
                    }}
                />
            {children}
        </NotificationContext.Provider>
    )
}