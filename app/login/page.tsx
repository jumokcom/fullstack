import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#4AD59A] space-y-8">
      <div className="text-center">
          <Image src="/logo.png" alt="유턴 로고" width={100} height={100} />
          <h1 className="text-6xl font-bold text-white">유턴</h1>
          <p className="text-white text-lg mt-2">귀농을 꿈꾸는 당신을 위한 AI 멘토</p>
      </div>
      <Card className="w-full max-w-sm mx-auto bg-white/30 backdrop-blur-lg border-none rounded-3xl">
        <CardHeader>
          <CardTitle className="text-white text-left">아이디</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="username" placeholder="아이디를 입력하세요" className="bg-white/50 border-white/80" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-white">비밀번호</Label>
                <Input id="password" type="password" placeholder="비밀번호를 입력하세요" className="bg-white/50 border-white/80" />
              </div>
              <Button className="w-full bg-white text-[#0DC577] hover:bg-gray-200 text-lg font-bold rounded-full py-6 mt-4">
                로그인
              </Button>
              <div className="text-center mt-4">
                <p className="text-white text-sm">서비스 이용약관 및 개인정보 수집 이용</p>
                <div className="w-full h-px bg-white/50 mt-1"></div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Chatbot 1 Frame (46:1150) - Embedded within Login Page */}
      <div className="absolute top-[160px] left-[450px] w-[390px] h-[844px] bg-white rounded-[50px] overflow-hidden">
        {/* Status Bar - iPhone */}
        <div className="w-full h-16 bg-gray-100 flex items-center justify-between px-4">
          <span className="font-bold">9:41</span>
          <div className="flex gap-2">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="w-full flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="유턴 로고" width={30} height={30} />
            <h1 className="text-xl font-bold text-[#0DC577]">유턴</h1>
          </div>
          {/* Placeholder for user avatar/icon */}
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>

        {/* Chatbot Main Content */}
        <div className="flex flex-col items-center justify-center p-4 mt-8">
          <h2 className="text-2xl font-bold text-gray-800">AI 귀농 챗봇</h2>
          <div className="grid grid-cols-1 gap-4 p-4 w-full max-w-sm mt-8">
            <Card className="bg-[#28D48B] text-white rounded-2xl p-6 flex flex-col justify-between">
              <CardTitle className="text-xl font-bold">새로운 대화</CardTitle>
              <Link href="/chatbot/new" passHref>
                <Button className="bg-white text-[#28D48B] rounded-full px-6 py-3 font-bold mt-4">시작하기</Button>
              </Link>
            </Card>
            <Card className="bg-[#D0F7E7] text-[#4AD59A] rounded-2xl p-6 flex flex-col justify-between">
              <CardTitle className="text-xl font-bold">이전 대화 이어하기</CardTitle>
              <Link href="/chatbot/history" passHref>
                <Button variant="outline" className="bg-white text-[#4AD59A] rounded-full px-6 py-3 font-bold mt-4">이어하기</Button>
              </Link>
            </Card>
            <Card className="bg-[#CCF6E4] text-[#09AD68] rounded-2xl p-6 flex flex-col justify-between">
              <CardTitle className="text-xl font-bold">자주 묻는 질문</CardTitle>
              <Link href="/chatbot/faq" passHref>
                <Button variant="outline" className="bg-white text-[#09AD68] rounded-full px-6 py-3 font-bold mt-4">확인하기</Button>
              </Link>
            </Card>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around items-center h-20">
          <Link href="/my-info" className="flex flex-col items-center text-gray-500 hover:text-[#0DC577]">
            <span>👤</span>
            <span className="text-xs">내 정보</span>
          </Link>
          <Link href="/consulting" className="flex flex-col items-center text-gray-500 hover:text-[#0DC577]">
            <span>🌱</span>
            <span className="text-xs">컨설팅</span>
          </Link>
          <Link href="/" className="flex flex-col items-center text-gray-500 hover:text-[#0DC577]">
            <span>🏠</span>
            <span className="text-xs">홈</span>
          </Link>
          <Link href="/chatbot" className="flex flex-col items-center text-[#0DC577]">
            <span>💬</span>
            <span className="text-xs">챗봇</span>
          </Link>
        </div>
      </div>
    </div>
  );
}