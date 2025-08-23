import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickStart() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🚀 빠른 시작</h2>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>프로젝트 설정</CardTitle>
          <CardDescription>새로운 풀스택 프로젝트를 시작하는 방법</CardDescription>
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
  );
}