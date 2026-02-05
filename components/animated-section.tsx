'use client'

import React from "react"

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function AnimatedSection({ children, className = '', id }: AnimatedSectionProps) {
  const { ref, isVisible, shouldAnimate } = useScrollAnimation()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={`${className} ${
        isVisible
          ? shouldAnimate
            ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out'
            : 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </section>
  )
}
