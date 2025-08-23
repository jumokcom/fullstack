import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TechIcon } from "@/components/tech-icon";

const resources = [
  {
    name: "Next.js Docs",
    url: "https://nextjs.org/docs",
    techName: "nextjs" as const,
  },
  {
    name: "TypeScript Handbook",
    url: "https://www.typescriptlang.org/docs/",
    techName: "typescript" as const,
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
    techName: "tailwind" as const,
  },
  { 
    name: "Shadcn/ui", 
    url: "https://ui.shadcn.com/", 
    techName: "react" as const,
  },
  {
    name: "Supabase Docs",
    url: "https://supabase.com/docs",
    techName: "supabase" as const,
  },
  {
    name: "Vercel Guide",
    url: "https://vercel.com/docs",
    techName: "vercel" as const,
  },
];

export function ResourcesSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📚 참고 자료</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <Card key={resource.name} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="mb-2">
                <TechIcon name={resource.techName} size="xl" />
              </div>
              <h4 className="font-semibold mb-2">{resource.name}</h4>
              <Button size="sm" variant="outline" asChild>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  문서 보기
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}