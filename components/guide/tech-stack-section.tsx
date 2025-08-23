import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/tech-icon";

const techStacks = [
  {
    name: "nextjs",
    title: "Next.js",
    category: "Framework",
    description: "React 기반 풀스택 프레임워크",
    features: [
      "서버 사이드 렌더링 (SSR)",
      "정적 사이트 생성 (SSG)",
      "API 라우트",
      "자동 코드 분할",
      "이미지 최적화"
    ],
    code: `// app/page.tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}`
  },
  {
    name: "typescript",
    title: "TypeScript", 
    category: "Language",
    description: "타입 안정성을 제공하는 JavaScript",
    features: [
      "컴파일 타임 에러 검출",
      "인텔리센스 지원",
      "코드 리팩토링 안전성",
      "팀 협업 향상"
    ],
    code: `interface User {
  id: number
  name: string
  email: string
}`
  },
  {
    name: "tailwind",
    title: "Tailwind CSS",
    category: "Styling", 
    description: "유틸리티 우선 CSS 프레임워크",
    features: [
      "유틸리티 클래스 기반",
      "반응형 디자인 지원",
      "커스터마이징 가능",
      "빌드 시 CSS 최적화"
    ],
    code: `<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  Beautiful Card
</div>`
  },
  {
    name: "react",
    title: "Shadcn/ui",
    category: "Components",
    description: "재사용 가능한 UI 컴포넌트",
    features: [
      "Radix UI (접근성)",
      "Tailwind CSS (스타일링)",
      "커스터마이징 가능",
      "TypeScript 지원"
    ],
    code: `npx shadcn-ui@latest add button
npx shadcn-ui@latest add card`
  },
  {
    name: "supabase",
    title: "Supabase",
    category: "Backend",
    description: "오픈소스 Firebase 대안",
    features: [
      "PostgreSQL 데이터베이스",
      "실시간 구독",
      "인증 시스템", 
      "스토리지",
      "Edge Functions"
    ],
    code: `import { createClient } from '@supabase/supabase-js'

const supabase = createClient(url, key)`
  },
  {
    name: "vercel",
    title: "Vercel",
    category: "Deploy",
    description: "Next.js 최적화 배포 플랫폼",
    features: [
      "Git 연동 자동 배포",
      "글로벌 CDN",
      "서버리스 함수",
      "도메인 연결",
      "분석 도구"
    ],
    code: `# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod`
  }
] as const;

export function TechStackSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📚 기술 스택 심화</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {techStacks.map((tech) => (
          <Card key={tech.name} className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TechIcon name={tech.name as any} />
                {tech.title}
                <Badge variant="outline">{tech.category}</Badge>
              </CardTitle>
              <CardDescription>{tech.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  {tech.name === "typescript" ? "장점" : 
                   tech.name === "tailwind" ? "특징" :
                   tech.name === "react" ? "구성 요소" :
                   tech.name === "supabase" ? "서비스" :
                   tech.name === "vercel" ? "기능" : "주요 기능"}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {tech.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  {tech.name === "typescript" ? "기본 타입" :
                   tech.name === "tailwind" ? "예시" :
                   tech.name === "react" ? "컴포넌트 추가" :
                   tech.name === "supabase" ? "클라이언트 설정" :
                   tech.name === "vercel" ? "배포 방법" : "사용법"}
                </h4>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <pre className="whitespace-pre-wrap">
                    <code>{tech.code}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}