import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WorkflowSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">⚙️ 개발 워크플로우</h2>
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
  );
}