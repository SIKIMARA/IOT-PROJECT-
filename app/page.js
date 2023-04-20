"use client"
import LoginPage from '@/components/LoginPage'
import { useState } from 'react'



export default function Home() {
  const [login, setLogin] = useState(false)
  return (
    <div>
      {login ? <h1>Connected</h1> : <LoginPage />}
    </div>
  )
}
