'use client'

import { Header } from '@/components/Header'
import { Text } from '@chakra-ui/react'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
    </>
  )
}
