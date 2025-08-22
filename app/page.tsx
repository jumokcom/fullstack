import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">웹 실험실</h1>
        <p className="text-gray-600 mb-8">
          웹 개발을 공부하면서 여러 페이지를 만들어 보는 사이트입니다
        </p>
      </div>

      <div className="flex gap-2">
        <Badge>React</Badge>
        <Badge variant="secondary">Next.js</Badge>
        <Badge variant="outline">TypeScript</Badge>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card feature test</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="제목을 입력하세요" />
          <Button className="w-full">save</Button>
        </CardContent>
      </Card>
    </main>
  );
}
