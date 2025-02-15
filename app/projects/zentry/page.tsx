import HeroZentry from '@/components/HeroZentry'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { post } from '@/data'
import React from 'react'
import ZentryContent from "@/components/ZentryContent"

export const metadata = {
  title: 'Zentry - Interactive Gaming Platform',
  description: 'A modern web application showcasing an innovative gaming platform combining AI, blockchain, and traditional gaming elements.',
}

export default function ZentryPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={post} />
        <HeroZentry />
        <ZentryContent/>
      </div>
    </main>
  )
}