import React from 'react'
import Routes from '../Config/Routes'
import AuthProvider from '../Config/Auth'

const Provider=()=>{
    return(
        <AuthProvider>

        <Routes/>
    </AuthProvider>
    )
}
export default Provider