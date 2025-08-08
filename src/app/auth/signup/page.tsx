import React from 'react'
import Signup from '../../../Components/auth/Signup'
import AuthRedirect from '@/utils/AuthRedirect'

const page = () => {
  return (
    <div>
      <AuthRedirect>
        <Signup/>
      </AuthRedirect>
    </div>
  )
}

export default page
