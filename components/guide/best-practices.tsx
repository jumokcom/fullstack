import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BestPractices() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">✨ 모범 사례</h2>
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
  );
}