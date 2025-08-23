import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Tech Stack Guide
            </Link>
            <Button variant="outline" asChild>
              <Link href="/">← 홈으로</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Complete Development Guide
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            현대적 웹 개발 완벽 가이드
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Next.js, TypeScript, Tailwind CSS, Shadcn/ui, Supabase를 활용한
            풀스택 웹 개발 방법을 단계별로 알아보세요.
          </p>
        </section>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🚀 빠른 시작
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>프로젝트 설정</CardTitle>
              <CardDescription>
                새로운 풀스택 프로젝트를 시작하는 방법
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm whitespace-pre-wrap">
                  <code>
{`# Next.js 프로젝트 생성
npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app

# Shadcn/ui 설치
npx shadcn-ui@latest init

# Supabase 클라이언트 설치  
npm install @supabase/supabase-js

# 개발 서버 실행
npm run dev`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack Deep Dive */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📚 기술 스택 심화
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Next.js */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🚀 Next.js
                  <Badge variant="outline">Framework</Badge>
                </CardTitle>
                <CardDescription>React 기반 풀스택 프레임워크</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">주요 기능</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 서버 사이드 렌더링 (SSR)</li>
                    <li>• 정적 사이트 생성 (SSG)</li>
                    <li>• API 라우트</li>
                    <li>• 자동 코드 분할</li>
                    <li>• 이미지 최적화</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">사용법</h4>
                  <div className="bg-gray-100 p-3 rounded text-sm">
                    <pre className="whitespace-pre-wrap">
                      <code>{`// app/page.tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TypeScript */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🔷 TypeScript
                  <Badge variant="outline">Language</Badge>
                </CardTitle>
                <CardDescription>
                  타입 안정성을 제공하는 JavaScript
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">장점</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 컴파일 타임 에러 검출</li>
                    <li>• 인텔리센스 지원</li>
                    <li>• 코드 리팩토링 안전성</li>
                    <li>• 팀 협업 향상</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">기본 타입</h4>
                  <div className="bg-gray-100 p-3 rounded text-sm">
                    <pre className="whitespace-pre-wrap">
                      <code>{`interface User {
  id: number
  name: string
  email: string
}`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tailwind CSS */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎨 Tailwind CSS
                  <Badge variant="outline">Styling</Badge>
                </CardTitle>
                <CardDescription>유틸리티 우선 CSS 프레임워크</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">특징</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 유틸리티 클래스 기반</li>
                    <li>• 반응형 디자인 지원</li>
                    <li>• 커스터마이징 가능</li>
                    <li>• 빌드 시 CSS 최적화</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">예시</h4>
                  <div className="bg-gray-100 p-3 rounded text-sm">
                    <pre className="whitespace-pre-wrap">
                      <code>{`<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  Beautiful Card
</div>`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shadcn/ui */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🧩 Shadcn/ui
                  <Badge variant="outline">Components</Badge>
                </CardTitle>
                <CardDescription>재사용 가능한 UI 컴포넌트</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">구성 요소</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Radix UI (접근성)</li>
                    <li>• Tailwind CSS (스타일링)</li>
                    <li>• 커스터마이징 가능</li>
                    <li>• TypeScript 지원</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">컴포넌트 추가</h4>
                  <div className="bg-gray-100 p-3 rounded text-sm">
                    <pre className="whitespace-pre-wrap">
                      <code>{`npx shadcn-ui@latest add button
npx shadcn-ui@latest add card`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Supabase */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ⚡ Supabase
                  <Badge variant="outline">Backend</Badge>
                </CardTitle>
                <CardDescription>오픈소스 Firebase 대안</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">서비스</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• PostgreSQL 데이터베이스</li>
                    <li>• 실시간 구독</li>
                    <li>• 인증 시스템</li>
                    <li>• 스토리지</li>
                    <li>• Edge Functions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">클라이언트 설정</h4>
                  <div className="bg-gray-100 p-3 rounded text-sm">
                    <pre className="whitespace-pre-wrap">
                      <code>{`import { createClient } from '@supabase/supabase-js'

const supabase = createClient(url, key)`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vercel */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🌐 Vercel
                  <Badge variant="outline">Deploy</Badge>
                </CardTitle>
                <CardDescription>Next.js 최적화 배포 플랫폼</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">기능</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Git 연동 자동 배포</li>
                    <li>• 글로벌 CDN</li>
                    <li>• 서버리스 함수</li>
                    <li>• 도메인 연결</li>
                    <li>• 분석 도구</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">배포 방법</h4>
                  <div className="bg-gray-100 p-3 rounded text-sm">
                    <pre className="whitespace-pre-wrap">
                      <code>{`# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Development Workflow */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ⚙️ 개발 워크플로우
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">1. 계획</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl mb-4">📋</div>
                <p className="text-sm text-gray-600">
                  요구사항 분석
                  <br />
                  기술 선택
                  <br />
                  프로젝트 구조 설계
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">2. 개발</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl mb-4">💻</div>
                <p className="text-sm text-gray-600">
                  컴포넌트 개발
                  <br />
                  API 구현
                  <br />
                  테스트 작성
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">3. 배포</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <p className="text-sm text-gray-600">
                  빌드 최적화
                  <br />
                  Vercel 배포
                  <br />
                  모니터링
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ✨ 모범 사례
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>개발 팁</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">📁 프로젝트 구조</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• app/ - Next.js App Router</li>
                    <li>• components/ - 재사용 컴포넌트</li>
                    <li>• lib/ - 유틸리티 함수</li>
                    <li>• hooks/ - 커스텀 훅</li>
                    <li>• types/ - TypeScript 타입</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">🔒 보안</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 환경 변수 사용</li>
                    <li>• RLS (Row Level Security)</li>
                    <li>• CSRF 보호</li>
                    <li>• 입력 데이터 검증</li>
                    <li>• HTTPS 강제 사용</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📚 참고 자료
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Next.js Docs",
                url: "https://nextjs.org/docs",
                icon: "🚀",
              },
              {
                name: "TypeScript Handbook",
                url: "https://www.typescriptlang.org/docs/",
                icon: "🔷",
              },
              {
                name: "Tailwind CSS",
                url: "https://tailwindcss.com/docs",
                icon: "🎨",
              },
              { name: "Shadcn/ui", url: "https://ui.shadcn.com/", icon: "🧩" },
              {
                name: "Supabase Docs",
                url: "https://supabase.com/docs",
                icon: "⚡",
              },
              {
                name: "Vercel Guide",
                url: "https://vercel.com/docs",
                icon: "🌐",
              },
            ].map((resource) => (
              <Card
                key={resource.name}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{resource.icon}</div>
                  <h4 className="font-semibold mb-2">{resource.name}</h4>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      문서 보기
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
