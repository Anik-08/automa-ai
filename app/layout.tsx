import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers/ThemeProvider'
import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Automa-AI',
  description: 'Automate Your Workflow with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <ClerkProvider>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-[#0B0F1A] transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
      </ClerkProvider>
    </html>
  )
}
