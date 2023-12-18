'use client'
import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

const AuthLinks = ({user}) => {
  return (
    <div
    className='flex justify-between items-center gap-6'
    >
       
       {
        user
        ?  
        <div className='flex items-center gap-4'>
          <Link href={'/upload'}>UpLoad</Link>
          <button onClick={signOut}>LogOut</button>
        </div>
        : <button onClick={() => signIn()}>SignIn</button>
       }       
             
    </div>
  )
}

export default AuthLinks