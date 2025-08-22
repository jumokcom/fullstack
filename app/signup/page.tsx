import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from 'next/image';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#4AD59A] space-y-8">
      <div className="text-center">
          <Image src="/logo.png" alt="유턴 로고" width={100} height={100} />
          <h1 className="text-6xl font-bold text-white">유턴</h1>
          <p className="text-white text-lg mt-2">귀농을 꿈꾸는 당신을 위한 AI 멘토</p>
      </div>
      <Card className="w-full max-w-sm mx-auto bg-white/30 backdrop-blur-lg border-none rounded-3xl">
        <CardHeader>
          <CardTitle className="text-white text-left">회원가입</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username" className="text-white">아이디</Label>
                <Input id="username" placeholder="아이디를 입력하세요" className="bg-white/50 border-white/80" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nickname" className="text-white">닉네임</Label>
                <Input id="nickname" placeholder="닉네임을 입력하세요" className="bg-white/50 border-white/80" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-white">비밀번호</Label>
                <Input id="password" type="password" placeholder="비밀번호를 입력하세요" className="bg-white/50 border-white/80" />
              </div>
              <Button className="w-full bg-white text-[#0DC577] hover:bg-gray-200 text-lg font-bold rounded-full py-6 mt-4">
                회원가입
              </Button>
              <div className="text-center mt-4">
                <p className="text-white text-sm">서비스 이용약관 및 개인정보 수집 이용</p>
                <div className="w-full h-px bg-white/50 mt-1"></div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
