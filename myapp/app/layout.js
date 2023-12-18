import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/SessionProvider'
import Navbar from '@/components/UI/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>        
       <AuthProvider>
        <Navbar />
       {children}
       
       </AuthProvider>        
        </body>
    </html>
  )
}
