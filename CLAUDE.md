# 프로젝트 기술 스택 & Context7 조회 지침

## 📋 주요 기술 스택
1. **Next.js** - React 프레임워크  
2. **TypeScript** - 타입 안정성
3. **Tailwind CSS** - 스타일링
4. **Shadcn/ui** - UI 컴포넌트  
5. **Supabase** - 백엔드 서비스
6. **Vercel** - 배포
7. **React** - 프레임워크
8. **VS Code** - 코드 에디터
9. **Claude Code** - AI 어시스턴트
10. **GitHub** - 프로젝트 관리

## 🔍 Context7 실시간 조회 지침

### 언제 조회하나?
- 사용자가 특정 기술에 대해 질문할 때
- 코드 구현 시 정확한 API나 사용법이 필요할 때  
- 설치, 설정, 배포 방법이 필요할 때
- 최신 버전의 변경사항 확인이 필요할 때

### 조회 방법:
```
1. mcp__context7__resolve-library-id로 라이브러리 ID 확인
2. mcp__context7__get-library-docs로 최신 문서 조회 (8000 토큰)
3. 토픽 지정으로 더 정확한 정보 획득
```

### 조회 우선순위:
1. **즉시 조회**: 구체적인 구현 질문
2. **선택적 조회**: 일반적인 개념 설명
3. **불필요**: 이미 알고 있는 기본 정보

## 🛠️ MCP 연결 상태
- ✅ Context7 (문서 조회)
- ✅ GitHub (프로젝트 관리) 
- ✅ Supabase (백엔드)