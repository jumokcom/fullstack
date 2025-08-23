import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { QuickStart } from "@/components/guide/quick-start";
import { TechStackSection } from "@/components/guide/tech-stack-section";
import { WorkflowSection } from "@/components/guide/workflow-section";
import { BestPractices } from "@/components/guide/best-practices";
import { ResourcesSection } from "@/components/guide/resources-section";

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

        <QuickStart />
        <TechStackSection />
        <WorkflowSection />
        <BestPractices />
        <ResourcesSection />
      </div>
    </div>
  );
}
