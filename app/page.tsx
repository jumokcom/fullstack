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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Next.js + TypeScript + Supabase
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Modern Web Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Claude Code와 MCP를 활용한 풀스택 웹 개발 플랫폼입니다. 모든 현대적
            기술 스택을 통합하여 빠른 개발을 지원합니다.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/auth/signup">시작하기</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/guide">개발 가이드</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/dashboard">대시보드</Link>
            </Button>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🚀 Next.js
                <Badge variant="outline">Framework</Badge>
              </CardTitle>
              <CardDescription>React 기반의 풀스택 프레임워크</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                서버 사이드 렌더링, 정적 생성, API 라우트를 지원하는 현대적
                React 프레임워크
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔷 TypeScript
                <Badge variant="outline">Language</Badge>
              </CardTitle>
              <CardDescription>
                타입 안정성을 제공하는 JavaScript
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                컴파일 타임에 오류를 잡아내고 더 안전한 코드 작성을 지원
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎨 Tailwind CSS
                <Badge variant="outline">Styling</Badge>
              </CardTitle>
              <CardDescription>유틸리티 우선 CSS 프레임워크</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                빠른 UI 개발을 위한 유틸리티 클래스 기반 CSS 프레임워크
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🧩 Shadcn/ui
                <Badge variant="outline">Components</Badge>
              </CardTitle>
              <CardDescription>재사용 가능한 UI 컴포넌트</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Tailwind CSS와 Radix UI를 기반으로 한 아름다운 컴포넌트
                라이브러리
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⚡ Supabase
                <Badge variant="outline">Backend</Badge>
              </CardTitle>
              <CardDescription>오픈소스 Firebase 대안</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                실시간 데이터베이스, 인증, 스토리지를 제공하는 백엔드 서비스
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🌐 Vercel
                <Badge variant="outline">Deploy</Badge>
              </CardTitle>
              <CardDescription>클라우드 플랫폼</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Next.js 애플리케이션을 위한 최적화된 배포 플랫폼
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">안전한 인증</h3>
              <p className="text-gray-600">
                Supabase Auth를 통한 소셜 로그인 및 이메일 인증 지원
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">빠른 개발</h3>
              <p className="text-gray-600">
                Claude Code와 MCP를 활용한 AI 지원 개발 환경
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">즉시 배포</h3>
              <p className="text-gray-600">
                Vercel을 통한 원클릭 배포 및 글로벌 CDN 지원
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
