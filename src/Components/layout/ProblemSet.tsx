'use client';
import { getProblems } from '@/app/services/user/userAPI';
import React, { useEffect } from 'react'

const ProblemSet:React.FC = () => {

  useEffect(()=>{
      const fetchProblems = async ()=>{
        try {
          const result = await getProblems()
          console.log('ress in problem',result)
        } catch (error) {
          console.error(error);
        }
      }
      fetchProblems()
  },[])

  return (
    <div>
      <h1>jsfjsmfsmfd</h1>

    </div>
  )
}

export default ProblemSet
