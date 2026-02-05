'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { AnimatedSection } from '@/components/animated-section'

export default function AdmissionResultsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
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
              <a href="/#consultants" className="hover:text-primary transition-colors">
                Our Consultants
              </a>
              <a href="/#boarding" className="hover:text-primary transition-colors">
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
        <AnimatedSection className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pexels-pixabay-267885.jpg"
              alt="Admission Results"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              연도별 입시 결과
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              인터프렙 학생들의 우수한 대학 합격 실적을 확인하세요
            </p>
          </div>
        </AnimatedSection>

        {/* YouTube Videos Section */}
        <AnimatedSection className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/lk88CBVT5_E"
                    title="The-I Prep 수강생 인터뷰"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="bg-black rounded-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Interprep TV - 수강생 인터뷰 리스트
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://www.youtube.com/watch?v=FuAesNCpbd8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-sm leading-relaxed hover:underline transition-all"
                  >
                    UPenn 합격생의 스펙과 활동내역은 어떨까?
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=dOY6UJuYQiw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-sm leading-relaxed hover:underline transition-all"
                  >
                    SAT 1520점 달성! 전효재 수강생 인터뷰
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=s071XV3tEXA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-sm leading-relaxed hover:underline transition-all"
                  >
                    ACT Composite 36점 만점 달성! 민규철 수강생 인터뷰
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=TIaOXlfoZMc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-sm leading-relaxed hover:underline transition-all"
                  >
                    온라인 클래스 수강만으로 1440점 달성! 김00 수강생 인터뷰
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=EzrPa5bPtP0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-sm leading-relaxed hover:underline transition-all"
                  >
                    스탠포드 합격 스펙 대공개!? 인터프렙 인터뷰
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-6">
                  *클릭하면 유튜브로 연결됩니다.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* 2025 Results */}
        <AnimatedSection className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <div className="bg-[rgb(13,37,99)] text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    2025 The I Prep Admission Results
                  </h3>
                  <p className="text-sm mt-2 opacity-90">
                    2025년 4월 7일 기준 확정 데이터
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-b-lg space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">8명</div>
                      <div className="text-sm text-muted-foreground">HYPS 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">중복합격 없음</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">11명</div>
                      <div className="text-sm text-muted-foreground">Top 20 School 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">중복합격 4명</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">9명</div>
                      <div className="text-sm text-muted-foreground">Top 30 School 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">중복합격 없음</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-foreground">
                      아이비리그 HYPS: Harvard, Stanford, Princeton, Dartmouth, Cornell, Brown, University of Chicago
                    </p>
                    <p className="text-sm text-muted-foreground">
                      이 외에 Accelerated Medical Program (의대), Accelerated Dental Program (치대), Pharmacy Program (약대) 등 다양한 professional school 합격
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">보딩 스쿨 합격 리스트</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-foreground mb-2">Top 10위 총 3명</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground ml-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Philips Exeter Academy (2명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>The Lawrenceville School (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>The Loomis Chaffee School (1명)</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-foreground mb-2">Top 25위 School 총 4명</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground ml-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Milton Academy (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Cranbrook Schools (2명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Blair Academy (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Webb Schools (1명)</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-foreground mb-2">Top 10위 Junior Boarding School</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground ml-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Eaglebrook School (2명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Fay School (4명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Fessenden School (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Indian Mountain School (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Rumsey Hall School (1명)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[rgb(13,37,99)]">•</span>
                            <span>Rectory School (1명)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">미국 대학 합격 리스트</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                      {[
                        'Harvard University (1명)',
                        'Stanford University (2명)',
                        'Princeton University (1명)',
                        'Dartmouth College (1명)',
                        'Cornell University (1명)',
                        'Brown University (1명)',
                        'University of Chicago (1명)',
                        'Carnegie Mellon (1명)',
                        'Pomona College (1명)',
                        'Northwestern University (3명)',
                        'Vanderbilt University (1명)',
                        'Johns Hopkins University (1명)',
                        'Georgia Tech (1명)',
                        'USC (4명)',
                        'University of Michigan (1명)',
                        'UC Berkeley (1명)',
                        'UCLA (1명)',
                        'Emory University (2명)',
                        'Washington University (1명)',
                        'UVA (1명)',
                        'Notre Dame (1명)',
                        'Boston University (1명)',
                        'NYU (3명)',
                        'UC San Diego (1명)',
                        'UNC Chapel Hill (1명)',
                      ].map((school, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-[rgb(13,37,99)]">•</span>
                          <span>{school}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 2024 Results */}
        <AnimatedSection className="bg-white py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <div className="bg-[rgb(13,37,99)] text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    2024 The I Prep Admission Results
                  </h3>
                  <p className="text-sm mt-2 opacity-90">
                    2024년 4월 1일 기준 (편입 결과 및 일부 누락된 합격 결과는 추후 업데이트 예정)
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-b-lg space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">5명</div>
                      <div className="text-sm text-muted-foreground">HYPS 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">합격률 30%</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">10명</div>
                      <div className="text-sm text-muted-foreground">아이비리그 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">합격률 59%</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="text-4xl font-bold text-[rgb(13,37,99)] mb-2">15명</div>
                      <div className="text-sm text-muted-foreground">아이비리그 플러스 합격자</div>
                      <div className="text-xs text-muted-foreground mt-1">합격률 88%</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      디아이프렙 '아이비리그 프로그램' 등록 학생 총 17명 기준
                    </p>
                    <p className="text-sm text-muted-foreground">
                      아이비리그 플러스: 아이비리그 8개교 + MIT, Stanford, Caltech, Duke, Johns Hopkins, University of Chicago
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      NYU BA/DDS 7년제 치과대학 합격
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-bold text-foreground mb-4">Top 30 대학 합격 리스트</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                      {[
                        'Harvard University (3명)',
                        'Yale University (1명)',
                        'Stanford University (3명)',
                        'MIT (1명)',
                        'Columbia University (2명)',
                        'University of Oxford, UK (1명)',
                        'UPenn (4명)',
                        'Cornell University (1명)',
                        'Brown University (3명)',
                        'Dartmouth College (1명)',
                        'Duke University (2명)',
                        'Northwestern University (2명)',
                        'Johns Hopkins Universit (3명)',
                        'University of Chicago (1명)',
                        'Vanderbilt University (1명)',
                        'Rice University (1명)',
                        'UCLA (4명)',
                        'Carnegie Mellon (1명)',
                        'NYU (1명)',
                        'Georgetown University (2명)',
                      ].map((school, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-[rgb(13,37,99)]">•</span>
                          <span>{school}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}
