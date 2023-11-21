import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from './components/Layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'sjQuizz',
  description: 'Quizz Making Platform for Teachers and Students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Navbar />
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
