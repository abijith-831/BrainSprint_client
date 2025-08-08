import Login from '@/Components/ui/login'
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
