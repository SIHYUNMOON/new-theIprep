'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'

export default function TransferPage() {
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
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/image.png"
                alt="The-I Prep Logo"
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
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
              <a href="/transfer" className="hover:text-primary transition-colors">
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
              alt="Transfer Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60" />
            <div className="absolute inset-0 backdrop-blur-[2px]" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 70%)' }} />
          </div>
          
          <div className="container mx-auto px-6 pb-16 relative z-10">
            <div className="text-white space-y-4 max-w-2xl">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-balance leading-tight">
                Transfer Consulting
              </h1>
              <div className="w-20 h-px bg-white/40" />
              <h2 className="text-xl md:text-2xl font-medium text-balance">
                미국 명문대학으로 가는 첫 걸음,
                <br />
                디아이프렙
              </h2>
              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl">
                Ivy League 및 상위 20개 대학 합격을 이끈 검증된 성공 기록, 경쟁이 치열한 미국 대학 입시를 위한 탁월한 컨설팅 제공
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Why us Section */}
        <section className="py-24 px-6 bg-[rgb(236,236,244)]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
              Why us?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">검증된 성공률</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    저희는 90% 이상의 학생들이 dream school 에 합격하는 놀라운 성과를 기록하고 있으며, Harvard, Stanford, MIT를 포함한 세계적인 명문 대학에 성공적으로 진학시켜 왔습니다. 이러한 성공률은 The I Prep의 탁월한 전문성과 입시 프로세스에 대한 깊은 이해를 증명합니다.
                  </p>
                </div>
              </div>

              <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">맞춤형 접근</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    저희는 모든 학생이 고유한 배경과 목표를 가지고 있음을 이해하고, 이를 바탕으로 개별화된 전략을 제공합니다. 학생의 학업 성취, 과외 활동, 미래 목표를 철저히 평가한 후, 학생의 필요와 강점에 맞는 맞춤형 계획을 설계합니다. 저희의 맞춤형 전략은 학생들의 강점을 최대한 부각시키고, 경쟁이 치열한 입시 환경에서 돋보일 수 있도록 돕습니다.
                  </p>
                </div>
              </div>

              <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">전문 컨설턴트 팀</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    저희의 컨설턴트 팀은 Harvard, Columbia 등 Ivy League 급 출신 졸업생들과 컨설팅에만 전념하는 전문가들로 구성되어 있습니다. 이들은 세계적인 명문 대학들이 찾고 있는 지원자의 핵심 요소를 깊이 이해하고 있으며, 학생들에게 맞춤형 조언과 멘토링을 제공합니다. 다양한 배경과 전문성을 갖춘 컨설턴트 팀은 학생들이 입시 경쟁에서 두각을 나타낼 수 있도록 최상의 지원을 제공합니다.
                  </p>
                </div>
              </div>

              <div className="fade-up bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-[rgb(13,37,99)]" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">포괄적인 서비스</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    저희는 입시 과정 전반에 걸쳐 포괄적인 지원을 제공합니다. 학생들이 자신에게 가장 적합한 대학을 선택할 수 있도록 돕는 것에서부터, 설득력 있는 에세이를 작성하고 성공적인 인터뷰를 준비할 수 있도록 전문적인 도움을 드립니다. 입시의 모든 단계를 철저히 지원함으로써 학생들이 자신감을 가지고 대학 입시를 준비할 수 있도록 최선을 다하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
              Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Program 1 */}
              <div className="fade-up bg-gradient-to-br from-[#5a6a84] to-[#3d5170] border-none hover:shadow-lg transition-all hover:scale-105 rounded-lg p-8 text-white">
                <h3 className="font-serif text-2xl font-semibold mb-6">
                  원서 컨설팅
                </h3>
                <div className="space-y-4">
                  <p className="text-white/90 font-medium">
                    대상: 12 학년 2학기 - 대학교 2학년 1 학기
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>Premium</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>Deluxe</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>미대</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Program 2 */}
              <div className="fade-up bg-gradient-to-br from-[#3d5170] to-[#2c3e5a] border-none hover:shadow-lg transition-all hover:scale-105 rounded-lg p-8 text-white">
                <h3 className="font-serif text-2xl font-semibold mb-6">
                  에세이 컨설팅
                </h3>
                <div className="space-y-4">
                  <p className="text-white/90 font-medium">
                    대상: 12 학년 2학기 - 대학교 2학년 1 학기
                  </p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>10 학교</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>5 학교</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
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

      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-up.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
