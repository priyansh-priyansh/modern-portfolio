import { FloatingNav } from '@/components/ui/FloatingNav'
import { post } from '@/data'
import React from 'react'
import HeroWanderLust from '@/components/HeroWanderLust'
import WanderLustContent from '@/components/WanderLustContent'

export const metadata = {
  title: 'WanderLust - Travel Accommodation Platform',
  description: 'A full-stack Airbnb-inspired platform for discovering, listing, and reviewing travel accommodations worldwide.',
}

export default function WanderLustPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={post} />
        <HeroWanderLust />
        <WanderLustContent/>
      </div>
    </main>
  )
}