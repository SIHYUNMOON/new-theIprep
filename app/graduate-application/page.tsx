'use client'

import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'

export default function GraduateApplicationPage() {
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
              <a href="/graduate" className="hover:text-primary transition-colors">
                대학원 컨설팅
              </a>
              <a href="/ec" className="hover:text-primary transition-colors">
                EC컨설팅
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative h-[30vh] min-h-[200px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/junior-hero-waves.jpg"
              alt="Grad Consulting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-center text-balance">
              Grad
              <br />
              Consulting
            </h1>
          </div>
        </AnimatedSection>

        {/* Full Consulting Section */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <p className="text-2xl font-bold text-foreground mb-6">대상 MA, MBA, MFA, JD, Ph.D 지원자</p>
              <div className="h-px bg-border mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Full Consulting</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Many students prepare for graduate school relying on <span className="text-[rgb(13,37,99)] font-semibold">non-professional advice</span> or undergraduate admission strategies. Simply choosing schools based on alumni background or focusing only on application submission is not sufficient. Successful graduate admissions require an <span className="text-[rgb(13,37,99)] font-semibold">integrated approach</span> including: contact emails, academic fit, school-specific priorities, Korean student acceptance trends, SOP writing, CV (not resume) preparation, recommender selection, and many other variables. Based on <span className="text-[rgb(13,37,99)] font-semibold">over 10 years of experience</span>, The I Prep Graduate Consulting supports applicants from start to finish to ensure successful admission to the most suitable programs.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>대학원 리스트 선정 (College Selection)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Build a strategic graduate school list based on the student's CV, including Safety, Target, and Reach programs for balanced and effective applications.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>원서 작성 및 검토 (Application Guidance & Review)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Guide application writing according to each program's requirements with thorough review and feedback from an admissions perspective.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>SOP, PS, CV 작성 및 지도 (Essay Writing & Editing)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  The Statement of Purpose (SOP) is the most critical document in U.S. graduate admissions and often determines final outcomes among applicants with similar GPAs and test scores.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>기타 입시 관련 서비스 (Additional Admissions Support)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Comprehensive support including recommendation strategy and interview preparation throughout the admissions process.
                </p>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">Pricing</h3>
              <ul className="space-y-2 text-lg text-foreground/80">
                <li>- 10 programs: 5,000,000 KRW</li>
                <li>- 5 programs: 3,000,000 KRW</li>
                <li>- 1 program: 1,000,000 KRW</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Section Divider */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Full Consulting + Art Portfolio (MFA) */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">Full Consulting + Art Portfolio (MFA)</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Many MFA applicants rely on <span className="text-[rgb(13,37,99)] font-semibold">informal advice</span> or undergraduate strategies. However, successful MFA admissions require a <span className="text-[rgb(13,37,99)] font-semibold">comprehensive approach</span> including contact emails, academic and artistic fit, SOP and PS writing, artist CV preparation, recommender selection, and portfolio strategy. Based on <span className="text-[rgb(13,37,99)] font-semibold">over 10 years of experience</span>, The I Prep supports applicants from start to finish to ensure successful admission to suitable MFA programs.
              </p>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-6">포함 서비스</h3>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>아트 포트폴리오 전략 및 피드백 (Art Portfolio Consulting & Review)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Support portfolio development reflecting artistic voice and vision, including work selection, theme development, composition, feedback, and final descriptions.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>대학원 리스트 선정 (College Selection)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Build a balanced graduate school list based on the student's CV and artistic focus.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>원서 작성 및 검토 (Application Guidance & Review)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Application writing guidance with admissions-level review and feedback tailored to each MFA program.
                </p>
              </div>

              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>SOP, PS, Artist Resume 작성 및 지도 (Essay Writing & Editing)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  SOP and Personal Statement are decisive factors in MFA admissions and are developed with strategic narrative positioning.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[rgb(13,37,99)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>기타 입시 관련 서비스 (Additional Admissions Support)</span>
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Full support including recommendation strategy and interview preparation for MFA applicants.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section Divider */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Itemized Services */}
        <AnimatedSection className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-[rgb(13,37,99)]">항목별 서비스</span>
              </h2>
              <div className="w-24 h-px bg-border mt-6" />
            </div>

            <div className="bg-white border border-border rounded-lg p-8">
              <ul className="space-y-2 text-lg text-foreground/80">
                <li>- Statement of Purpose (SOP): 700,000 KRW</li>
                <li>- Personal Statement (PS): 700,000 KRW</li>
                <li>- Curriculum Vitae (CV): 200,000 KRW</li>
                <li>- Contact Email: 200,000 KRW</li>
              </ul>
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
