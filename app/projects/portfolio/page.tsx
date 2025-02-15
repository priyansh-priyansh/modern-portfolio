import { FloatingNav } from '@/components/ui/FloatingNav'
import { post } from '@/data'
import React from 'react'
import ContentPortfolio from "@/components/ContentPortfolio"
import HeroPortfolio from "@/components/HeroPortfolio"

export const metadata = {
  title: 'Modern Portfolio Website',
  description: 'A modern, interactive portfolio website featuring advanced animations, 3D elements, and real-time user interactions.',
}

export default function PortfolioPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={post} />
        <HeroPortfolio />
        <ContentPortfolio/>
      </div>
    </main>
  )
}