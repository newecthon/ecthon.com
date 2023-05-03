'use client'

import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { Flex, Text } from '@chakra-ui/react'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Flex
      w='100%'
      h='100vh'
      flexDir='column'
      bg='#1C1C1C'
    >
      <Header />
      <Heading />
    </Flex>
  )
}
