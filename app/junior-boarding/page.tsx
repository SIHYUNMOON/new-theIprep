'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'

export default function JuniorBoardingPage() {
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
        <AnimatedSection className="relative h-[40vh] min-h-[300px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/boarding-hero.jpg"
              alt="Junior Boarding Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="relative z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white text-center text-balance">
              Senior Boarding
              <br />
              Consulting
            </h1>
          </div>
        </AnimatedSection>

        {/* Premium Package Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-foreground/70 mb-6">대상 6학년, 7학년, 8학년 학생</p>
              <div className="h-px bg-border mb-8" />
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-4">
                <span className="text-[rgb(13,37,99)]">프리미엄 패키지</span>는 상위 주니어 보딩스쿨 입학을 목표로 하는 학생들에게 <span className="text-[rgb(13,37,99)]">종합적인 지원</span>을 제공합니다.
              </h2>
              <div className="w-24 h-px bg-primary mt-6" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-8">포함 서비스</h3>
            
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">이력 관리</h4>
                <p className="text-foreground/80 leading-relaxed">
                  학업 성적, 예술, 스포츠, 리더십 등 지원자의 강점을 극대화하는 전략적 이력 관리
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">학업 관리</h4>
                <p className="text-foreground/80 leading-relaxed">
                  SSAT, TOEFL Jr., Duolingo 등 필수 시험 준비를 위한 체계적 지도
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">학교 선정 및 인터뷰 준비</h4>
                <p className="text-foreground/80 leading-relaxed">
                  명확하고 자신감 있는 인터뷰 준비를 통해 지원자의 적합성과 강점을 효과적으로 전달
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">에세이 준비</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Ivy League 졸업자와 명문 보딩스쿨 출신 전문가의 지도 아래, 학생의 개성을 돋보이게 하는 에세이 작성
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">추가 지원 서비스</h4>
                <p className="text-foreground/80 leading-relaxed">
                  원서 작성, 추천서 준비, 학부모 에세이 번역, 행정 서류 작성, 입학 후 문화 적응 지원
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="container mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Deluxe Package Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-4">
                <span className="text-[rgb(13,37,99)]">디럭스 패키지</span>는 기존의 학생 프로필을 강화하고, <span className="text-[rgb(13,37,99)]">입학에 필요한 주요 요소</span>를 집중적으로 지원합니다.
              </h2>
              <div className="w-24 h-px bg-primary mt-6" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-8">포함 서비스</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">학교 선정 및 인터뷰 준비</h4>
                <p className="text-foreground/80 leading-relaxed">
                  학교와의 적합성을 명확히 표현할 수 있도록 맞춤형 인터뷰 대비 제공
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">에세이 준비</h4>
                <p className="text-foreground/80 leading-relaxed">
                  학생 개성을 나타내는 에세이 작성과 수정, Ivy League 및 명문 보딩스쿨 전문가의 세심한 피드백 제공
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">추가 지원 서비스</h4>
                <p className="text-foreground/80 leading-relaxed">
                  원서 작성, 추천서 준비, 행정 서류 작성 등 입학 전반의 지원
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="container mx-auto max-w-6xl px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Light Package Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-4">
                <span className="text-[rgb(13,37,99)]">라이트 패키지</span>는 학생들이 <span className="text-[rgb(13,37,99)]">에세이와 인터뷰 준비</span>에 집중할 수 있도록 설계된 프로그램입니다.
              </h2>
              <div className="w-24 h-px bg-primary mt-6" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-8">포함 서비스</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">인터뷰 준비</h4>
                <p className="text-foreground/80 leading-relaxed">
                  긴장하지 않고 자신감을 가지고 의견을 전달할 수 있도록 철저히 대비
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3">에세이 준비</h4>
                <p className="text-foreground/80 leading-relaxed">
                  지원 학교별 요구 사항에 맞춘 에세이 작성 및 수정
                </p>
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
