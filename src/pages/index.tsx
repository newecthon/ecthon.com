'use client'

import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { Projects } from '@/components/Projects'
import { Technologies } from '@/components/Technologies'

export default function Home() {
  return (
    <>
      <Header />
      <Heading />
      <Projects />
      <Technologies />
      <About />
      <Footer />
    </>
  )
}
