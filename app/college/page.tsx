'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'

export default function CollegePage() {
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
              <div className="relative group">
                <a href="/boarding-school" className="hover:text-primary transition-colors cursor-pointer">
                  보딩스쿨 컨설팅
                </a>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-border rounded-lg shadow-lg py-2 min-w-[180px]">
                    <a href="/senior-boarding" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-foreground">
                      Senior Boarding
                    </a>
                    <a href="/junior-boarding" className="block px-4 py-2 hover:bg-gray-100 transition-colors text-foreground">
                      Junior Boarding
                    </a>
                  </div>
                </div>
              </div>
              <a href="/college" className="hover:text-primary transition-colors">
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
              alt="College Consulting"
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
                College Consulting
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

        {/* Why Us Section */}
        <AnimatedSection className="bg-[rgb(236,236,244)] py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
              Why us?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="fade-up bg-white border-none hover:shadow-lg transition-shadow rounded-lg p-8">
                <div className="h-1 bg-[rgb(13,37,99)] mb-6 w-16" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  검증된 성공률
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  저희는 90% 이상의 학생들이 dream school 에 합격하는 놀라운 성과를 기록하고 있으며, Harvard, Stanford, MIT를 포함한 세계적인 명문 대학에 성공적으로 진학시켜 왔습니다. 이러한 성공률은 디아이프렙의 탁월한 전문성과 입시 프로세스에 대한 깊은 이해를 증명합니다.
                </p>
              </div>

              {/* Card 2 */}
              <div className="fade-up bg-white border-none hover:shadow-lg transition-shadow rounded-lg p-8">
                <div className="h-1 bg-[rgb(13,37,99)] mb-6 w-16" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  맞춤형 접근
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  저희는 모든 학생이 고유한 배경과 목표를 가지고 있음을 이해하고, 이를 바탕으로 개별화된 전략을 제공합니다. 학생의 학업 성취, 과외 활동, 미래 목표를 철저히 평가한 후, 학생의 필요와 강점에 맞는 맞춤형 계획을 설계합니다.
                </p>
              </div>

              {/* Card 3 */}
              <div className="fade-up bg-white border-none hover:shadow-lg transition-shadow rounded-lg p-8">
                <div className="h-1 bg-[rgb(13,37,99)] mb-6 w-16" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  전문 컨설턴트 팀
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  저희의 컨설턴트 팀은 Harvard, Columbia 등 Ivy League 급 출신 졸업생들과 컨설팅에만 전념하는 전문가들로 구성되어 있습니다. 이들은 세계적인 명문 대학들이 찾고 있는 지원자의 핵심 요소를 깊이 이해하고 있으며, 학생들에게 맞춤형 조언과 멘토링을 제공합니다. 다양한 배경과 전문성을 갖춘 컨설턴트 팀은 학생들이 입시 경쟁에서 두각을 나타낼 수 있도록 최상의 지원을 제공합니다.
                </p>
              </div>

              {/* Card 4 */}
              <div className="fade-up bg-white border-none hover:shadow-lg transition-shadow rounded-lg p-8">
                <div className="h-1 bg-[rgb(13,37,99)] mb-6 w-16" />
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  포괄적인 서비스
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  저희는 입시 과정 전반에 걸쳐 포괄적인 지원을 제공합니다. 학생들이 자신에게 가장 적합한 대학을 선택할 수 있도록 돕는 것에서부터, 설득력 있는 에세이를 작성하고 성공적인 인터뷰를 준비할 수 있도록 전문적인 도움을 드립니다. 입시의 모든 단계를 철저히 지원함으로써 학생들이 자신감을 가지고 대학 입시를 준비할 수 있도록 최선을 다하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Programs Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary text-center mb-16 fade-up">
              Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* College Consulting */}
              <div className="fade-up bg-[#5a6a84] border-none hover:shadow-lg transition-shadow rounded-lg aspect-square flex flex-col p-8">
                <h3 className="font-serif text-2xl font-semibold text-white mb-4">
                  대학 컨설팅
                </h3>
                <div className="space-y-3 flex-1">
                  <p className="text-white/90 font-medium">대상: 예비 11학년</p>
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
                      <span>Essay Only</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>미대</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>편입</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mentoring */}
              <div className="fade-up bg-[#3d5170] border-none hover:shadow-lg transition-shadow rounded-lg aspect-square flex flex-col p-8">
                <h3 className="font-serif text-2xl font-semibold text-white mb-4">
                  멘토링 컨설팅
                </h3>
                <div className="space-y-3 flex-1">
                  <p className="text-white/90 font-medium">대상: 7학년 – 10 학년 학생</p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>주니어 멘토링</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>시니어 멘토링</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* EC Consulting */}
              <div className="fade-up bg-[rgb(13,37,99)] border-none hover:shadow-lg transition-shadow rounded-lg aspect-square flex flex-col p-8">
                <h3 className="font-serif text-2xl font-semibold text-white mb-4">
                  EC 컨설팅
                </h3>
                <div className="space-y-3 flex-1">
                  <p className="text-white/90 font-medium">대상: 8학년 2학기 학생 - 12 학년 학생</p>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>대회 & 연구</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>써머스쿨/ 프로그램 원서</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>인턴십</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>아트 포트폴리오</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>+</span>
                      <span>아트 포트폴리오 부트 캠프</span>
                    </li>
                  </ul>
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
            <div className="grid md:grid-cols-2 gap-8">
              <div className="fade-up">
                <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/6kZ1XNO-coE"
                    title="The-I Prep TV Video 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="fade-up">
                <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/PMWr0ajhEL0"
                    title="The-I Prep TV Video 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
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
