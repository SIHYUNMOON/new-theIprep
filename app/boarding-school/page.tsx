'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'

export default function BoardingSchoolPage() {
  useEffect(() => {
    const fadeUpElements = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-active')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    fadeUpElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/images/image.png"
                alt="The-I Prep Logo"
                className="h-10 w-auto"
              />
            </a>
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="/performance" className="hover:text-primary transition-colors">
                Our Performance
              </a>
              <a href="/consultants" className="hover:text-primary transition-colors">
                Our Consultants
              </a>
              <a href="/boarding-school" className="hover:text-primary transition-colors">
                보딩스쿨 컨설팅
              </a>
              <a href="/#college" className="hover:text-primary transition-colors">
                대학교 컨설팅
              </a>
              <a href="/#transfer" className="hover:text-primary transition-colors">
                편입 컨설팅
              </a>
              <a href="/#graduate" className="hover:text-primary transition-colors">
                대학원 컨설팅
              </a>
              <a href="/#ec" className="hover:text-primary transition-colors">
                EC컨설팅
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative min-h-[85vh] flex items-end pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/boarding-hero.jpg"
              alt="Boarding School Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60" />
            <div className="absolute inset-0 backdrop-blur-[2px]" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 70%)' }} />
          </div>
          
          <div className="w-full px-6 md:px-12 pb-20 relative z-10">
            <div className="text-white space-y-6 max-w-3xl">
              <h1 className="font-serif text-5xl md:text-7xl font-semibold text-balance leading-tight">
                Boarding school
                <br />
                Consulting
              </h1>
              <div className="w-24 h-px bg-white/40" />
              <h2 className="text-2xl md:text-3xl font-medium text-balance">
                미국 사립고로 가는 첫 걸음,
                <br />
                디아이프렙
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                Phillips Exeter 및 상위 10 보딩스쿨 합격을 이끈 검증된 성공 기록, 경쟁이 치열한 탑보딩스쿨 입시를 위한 탁월한 컨설팅 제공
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Us Section */}
        <AnimatedSection className="py-24 px-6 bg-[rgb(236,236,244)]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
              Why us?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="fade-up bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    검증된 성공률
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    다년간의 경험을 바탕으로 500명 이상의 학생들이 자신에게 맞는 학교에 입학하여 꿈을 이룰 수 있도록 도왔습니다. 단순히 합격을 목표로 하는게 아니라, 학생 개개인과 잘 어울리는 드림스쿨을 찾을 수 있도록 맞춤형 컨설팅을 제공합니다.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="fade-up bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    전문 컨설턴트 팀
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Grace 원장과 컨설턴트 팀은 미국유명 보딩스쿨 출신 졸업생, 전직 입학 담당자 및 교육자들로 구성되어 있습니다. 함께 축적된 경험과 전문성을 바탕으로 학생들을 성공적인 입학과 그 이상의 여정으로 이끌어갑니다. 저희 팀은 모두 유학생 출신으로, 학생들이 미국 보딩 스쿨 시스템에 적응하고 성공할 수 있도록 돕는데 특화 되었습니다.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="fade-up bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    포괄적인 서비스
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    저희는 입시 과정 전반에 걸쳐 포괄적인 지원을 제공합니다. 학생들이 자신에게 가장 적합한 보딩스쿨을 선택할 수 있도록 돕는 것에서부터, 설득력 있는 에세이를 작성하고 성공적인 인터뷰를 준비할 수 있도록 전문적인 도움을 드립니다. 입시의 모든 단계를 철저히 지원함으로써 학생들이 자신감을 가지고 보딩스쿨 입시를 준비할 수 있도록 최선을 다하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Programs Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Senior Boarding */}
              <div className="fade-up bg-white border-none hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                    명문 시니어 보딩 컨설팅
                  </h3>
                  <div className="space-y-3">
                    <p className="text-foreground/80 font-medium">대상: 9 학년, 10 학년 학생</p>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-center gap-2">
                        <span className="text-[rgb(13,37,99)]">+</span>
                        <span>Premium</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[rgb(13,37,99)]">+</span>
                        <span>Deluxe</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[rgb(13,37,99)]">+</span>
                        <span>Light</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[rgb(13,37,99)]">+</span>
                        <span>전학</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[rgb(13,37,99)]">+</span>
                        <span>탑 예술 보딩</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Junior Boarding */}
              <div className="fade-up bg-white border-none hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                    주니어 보딩 컨설팅
                  </h3>
                  <div className="space-y-3">
                    <p className="text-foreground/80 font-medium">대상: 6 학년, 7 학년, 8 학년 학생</p>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-center gap-2">
                        <span className="text-[rgb(13,37,99)]">+</span>
                        <span>Premium</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[rgb(13,37,99)]">+</span>
                        <span>Deluxe</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[rgb(13,37,99)]">+</span>
                        <span>Light</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Advising */}
              <div className="fade-up bg-white border-none hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                    보딩스쿨 어드바이징 컨설팅
                  </h3>
                  <div className="space-y-3">
                    <p className="text-foreground/80 font-medium">대상: 7학년 - 10 학년 보딩스쿨 재학생</p>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-center gap-2">
                        <span className="text-[rgb(13,37,99)]">+</span>
                        <span>Advising Consulting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* YouTube Section */}
        <AnimatedSection className="py-24 px-6 bg-[rgb(236,236,244)]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
              The-I Prep TV
            </h2>
            <div className="fade-up max-w-4xl mx-auto">
              <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/UGjYeSzUhGc"
                  title="The-I Prep TV"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl">
          <div className="text-left text-sm space-y-2 opacity-90">
            <p className="leading-relaxed">
              The I Prep | 서울특별시 강남구 역삼로 424, 진영빌딩 4층 | 4F Jinyoung Building, Yeoksam-ro 424, Gangnam-gu, Seoul
            </p>
            <p className="leading-relaxed">
              디아이파트너즈 | 사업자번호: 224-85-28561 | 학원설립운영등록 제11725호 | EMAIL theipartners@theiprep.com | TEL : 02-6205-5455
            </p>
            <p className="leading-relaxed">
              입금계좌 | 디아이파트너즈학원<br />
              신한은행 140-012-951522
            </p>
            <p className="pt-2">
              Copyright © The I Prep. ALL RIGHT RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
