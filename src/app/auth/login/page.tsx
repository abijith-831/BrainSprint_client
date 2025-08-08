import Login from '@/Components/auth/Login'
import AuthRedirect from '@/utils/AuthRedirect'
import React from 'react'

const LoginPage:React.FC = () => {
  return (
    <div>
      <AuthRedirect>
        <Login/>
      </AuthRedirect>
    </div>
  )
}

export default LoginPage
