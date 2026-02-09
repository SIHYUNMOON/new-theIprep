'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LoginModal } from '@/components/board/login-modal'
import { useAuth } from '@/lib/auth-context'

export function Header() {
  const [showBoardLogin, setShowBoardLogin] = useState(false)
  const { isAdminLoggedIn, logout, isLoading } = useAuth()

  const handleBoardLogout = async () => {
    try {
      const result = await logout()
      if (result.success) {
        console.log('[v0] Admin logged out successfully')
      }
    } catch (error) {
      console.error('[v0] Logout error:', error)
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/images/logo_ke.png"
                alt="The-I Prep Logo"
                className="h-10 w-auto"
              />
            </a>
            <div className="hidden lg:flex flex-center gap-8 text-sm font-medium">
              <a href="/performance" className="hover:text-primary transition-colors">
                Our Performance
              </a>
              <a href="/consultants" className="hover:text-primary transition-colors">
                Our Consultants
              </a>
              <div className="relative group">
                <a href="/boarding-school" className="hover:text-primary transition-colors cursor-pointer">
                  보딩스쿨 컨설팅
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[rgb(13,37,99)] rounded-lg shadow-lg py-2 min-w-[180px]">
                    <a href="/senior-boarding" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      Senior Boarding
                    </a>
                    <a href="/junior-boarding" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      Junior Boarding
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <a href="/college" className="hover:text-primary transition-colors cursor-pointer">
                  대학교 컨설팅
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[rgb(13,37,99)] rounded-lg shadow-lg py-2 min-w-[180px]">
                    <a href="/college-consulting" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      대학 컨설팅
                    </a>
                    <a href="/mentoring-consulting" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      멘토링 컨설팅
                    </a>
                    <a href="/ec-consulting" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      EC 컨설팅
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <a href="/transfer" className="hover:text-primary transition-colors cursor-pointer">
                  편입 컨설팅
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[rgb(13,37,99)] rounded-lg shadow-lg py-2 min-w-[180px]">
                    <a href="/transfer-application" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      원서 컨설팅
                    </a>
                    <a href="/transfer-essay" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      에세이 컨설팅
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <a href="/graduate" className="hover:text-primary transition-colors cursor-pointer">
                  대학원 컨설팅
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[rgb(13,37,99)] rounded-lg shadow-lg py-2 min-w-[180px]">
                    <a href="/graduate-application" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      원서 컨설팅
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <a href="/ec" className="hover:text-primary transition-colors cursor-pointer">
                  EC 컨설팅
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-[rgb(13,37,99)] rounded-lg shadow-lg py-2 min-w-[180px]">
                    <a href="/ec-academic" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      아카데믹 컨설팅
                    </a>
                    <a href="/ec-art" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      미술 컨설팅
                    </a>
                    <a href="/ec-kynd" className="block px-4 py-2 hover:bg-[rgb(23,47,109)] transition-colors text-white">
                      KYND 컨설팅
                    </a>
                  </div>
                </div>
              </div>
              <a href="/board" className="hover:text-primary transition-colors">
                정보게시판
              </a>
              {!isLoading && (
                isAdminLoggedIn ? (
                  <Button 
                    onClick={handleBoardLogout}
                    variant="outline"
                    size="sm"
                    className="text-destructive border-destructive/30"
                  >
                    로그아웃
                  </Button>
                ) : (
                  <Button 
                    onClick={() => setShowBoardLogin(true)}
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    로그인
                  </Button>
                )
              )}
            </div>
          </div>
        </nav>
      </header>
      <LoginModal 
        isOpen={showBoardLogin} 
        onClose={() => setShowBoardLogin(false)} 
      />
    </>
  )
}
