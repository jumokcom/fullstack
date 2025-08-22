# Gemini CLI + MCP를 활용한 웹 개발 워크플로우

## 🛠️ 완성된 개발 환경

### 기술 스택

```
🎨 디자인: Figma
📋 프로젝트 관리: GitHub Issues + Projects
⚡ 개발 스택:
- Next.js (React 프레임워크)
- TypeScript (타입 안정성)
- Tailwind CSS (스타일링)
- Shadcn/ui (UI 컴포넌트)
- Supabase (백엔드 서비스)
- Vercel (배포)
🛠️ 개발 도구:
- VS Code (코드 에디터)
- Gemini CLI (AI 어시스턴트)
```

### Model Context Protocol (MCP) - Gemini CLI 연동 도구

이 프로젝트에서 **Model Context Protocol (MCP)**은 특정 서버를 지칭하는 것이 아니라, Gemini CLI가 사용 가능한 도구(Tool)를 통해 외부 서비스와 상호작용하는 **작업 방식 또는 프로토콜 그 자체**를 의미합니다. 즉, Gemini CLI에 "Supabase에 테이블 만들어줘"라고 요청하고, CLI가 `apply_migration` 도구를 실행하는 과정 전체가 MCP의 일부입니다.

현재 연결된 MCP 도구 모음은 다음과 같습니다.

- **🟢 filesystem** (14개 도구) - 로컬 파일 시스템 제어
- **🟢 github** (26개 도구) - GitHub 저장소 및 프로젝트 관리
- **🟢 supabase** (19개 도구) - Supabase 백엔드 및 데이터베이스 관리
- **🟢 figma** (2개 도구) - Figma 디자인 데이터 연동

## 📋 단계별 개발 워크플로우

### 1단계: 프로젝트 기획 및 설계

#### Figma를 통한 디자인

```bash
# Gemini CLI로 Figma 데이터 가져오기
get_figma_data - Figma 파일에서 디자인 데이터 추출
download_figma_images - 디자인 에셋 다운로드
```

**활용 방법:**

- Figma에서 UI/UX 디자인 완성
- Gemini CLI로 디자인 시스템 분석
- 컴포넌트 구조와 색상 팔레트 추출
- 이미지 에셋 자동 다운로드

#### GitHub Issues로 작업 계획

```bash
# GitHub 도구 활용
create_issue - 새로운 작업 이슈 생성
list_issues - 전체 이슈 목록 조회
search_issues - 특정 이슈 검색
```

### 2단계: 프로젝트 초기 설정

#### 로컬 개발 환경 구축

```bash
# Filesystem 도구로 프로젝트 구조 관리
create_directory - 프로젝트 폴더 생성
directory_tree - 프로젝트 구조 확인
read_text_file - 설정 파일 확인
write_file - 설정 파일 생성/수정
```

**실제 명령 예시:**

1. Next.js 프로젝트 생성
2. Gemini CLI로 프로젝트 구조 분석
3. 필요한 폴더와 파일 자동 생성

#### GitHub 리포지토리 설정

```bash
create_repository - 새 저장소 생성
create_branch - 개발 브랜치 생성
push_files - 초기 파일들 커밋
```

### 3단계: 데이터베이스 설계

#### Supabase 프로젝트 설정

```bash
# Supabase 도구 활용
get_project_url - 프로젝트 URL 확인
list_tables - 현재 테이블 목록 조회
execute_sql - SQL 쿼리 실행
apply_migration - 마이그레이션 적용
generate_typescript_types - TypeScript 타입 생성
```

**데이터베이스 설계 프로세스:**

1. Gemini CLI로 테이블 구조 설계
2. SQL 마이그레이션 파일 생성
3. TypeScript 타입 자동 생성
4. API 키 및 연결 설정 확인

### 4단계: 개발 진행

#### 컴포넌트 개발

```bash
# Filesystem으로 컴포넌트 관리
read_multiple_files - 여러 컴포넌트 파일 동시 분석
edit_file - 코드 수정
search_files - 특정 패턴의 파일 검색
```

**개발 워크플로우:**

1. Figma 디자인을 기반으로 컴포넌트 구조 분석
2. Shadcn/ui 컴포넌트 활용 방안 결정
3. Gemini CLI로 코드 자동 생성 및 리팩토링
4. TypeScript 타입 안정성 확보

#### 실시간 협업

```bash
# GitHub를 통한 버전 관리
create_pull_request - PR 생성
add_issue_comment - 이슈에 진행사항 업데이트
update_issue - 이슈 상태 변경
```

### 5단계: 데이터베이스 연동

#### Supabase 통합

```bash
# 백엔드 기능 구현
list_edge_functions - Edge Function 목록 확인
deploy_edge_function - 서버리스 함수 배포
get_anon_key - 익명 키 확인
get_logs - 애플리케이션 로그 확인
```

**데이터 흐름:**

1. React 컴포넌트에서 Supabase 클라이언트 사용
2. Gemini CLI로 데이터베이스 쿼리 최적화
3. 실시간 구독 기능 구현
4. 인증 시스템 통합

### 6단계: 테스트 및 배포

#### 코드 품질 관리

```bash
# GitHub를 통한 코드 리뷰
create_pull_request_review - PR 리뷰 작성
get_pull_request_status - PR 상태 확인
merge_pull_request - PR 병합
```

#### Vercel 배포 준비

```bash
# 배포 전 최종 확인
list_commits - 최근 커밋 내역 확인
get_file_contents - 배포 설정 파일 확인
```

## 🔄 일상적인 개발 루틴

### 매일 시작할 때

```bash
1. list_issues - 오늘 할 작업 확인
2. directory_tree - 프로젝트 현재 상태 파악
3. get_logs - Supabase 에러 로그 확인
4. list_commits - 최근 변경사항 검토
```

### 새 기능 개발 시

```bash
1. create_issue - 기능 요구사항 이슈 생성
2. create_branch - 기능 개발용 브랜치 생성
3. get_figma_data - 관련 디자인 데이터 확인
4. execute_sql - 필요한 DB 스키마 변경
5. edit_file - 코드 개발
6. create_pull_request - PR 생성 및 리뷰 요청
```

### 문제 해결 시

```bash
1. get_logs - Supabase 에러 로그 분석
2. search_code - 관련 코드 패턴 검색
3. search_issues - 유사한 문제 사례 확인
4. add_issue_comment - 해결 과정 문서화
```

## 💡 고급 활용 팁

### 자동화된 워크플로우

```bash
# 일괄 작업 스크립트 예시
1. get_figma_data → 디자인 변경사항 확인
2. generate_typescript_types → 타입 자동 업데이트
3. edit_file → 컴포넌트 코드 자동 수정
4. create_pull_request → 변경사항 자동 PR
```

### 효율적인 디버깅

```bash
1. get_logs → 에러 로그 실시간 모니터링
2. execute_sql → 데이터베이스 상태 직접 확인
3. search_files → 에러 관련 코드 패턴 검색
4. update_issue → 버그 수정 진행사항 업데이트
```

### 협업 최적화

```bash
1. list_pull_requests → 팀원 PR 상태 확인
2. get_pull_request_comments → 리뷰 피드백 분석
3. create_pull_request_review → 코드 리뷰 작성
4. merge_pull_request → 승인된 변경사항 병합
```

## 🎯 이 워크플로우의 장점

### 생산성 향상

- **자동화**: 반복 작업을 Gemini CLI로 자동화
- **통합**: 모든 도구를 하나의 인터페이스에서 관리
- **실시간**: 즉시 피드백과 문제 해결

### 코드 품질

- **타입 안정성**: TypeScript + Supabase 타입 자동 생성
- **일관성**: Figma 디자인 시스템과 코드 동기화
- **버전 관리**: GitHub을 통한 체계적인 변경사항 추적

### 협업 효율성

- **투명성**: 모든 작업이 이슈와 PR로 추적
- **문서화**: 자동화된 진행사항 기록
- **피드백**: 실시간 코드 리뷰와 개선사항 반영

이 워크플로우로 1인 개발자도 대규모 팀 수준의 개발 프로세스를 구축할 수 있습니다! 🚀

### Gemini CLI MCP 기능: 사용 가능한 도구 목록

<details>
<summary><strong>🟢 filesystem (14개 도구)</strong> - 로컬 파일 시스템 제어</summary>

```
- create_directory
- directory_tree
- edit_file
- get_file_info
- list_allowed_directories
- filesystemlist_directory
- list_directory_with_sizes
- move_file
- filesystemread_file
- read_media_file
- read_multiple_files
- read_text_file
- search_files
- filesystemwrite_file
```

</details>

<details>
<summary><strong>🟢 github (26개 도구)</strong> - GitHub 저장소 및 프로젝트 관리</summary>

```
- add_issue_comment
- create_branch
- create_issue
- create_or_update_file
- create_pull_request
- create_pull_request_review
- create_repository
- fork_repository
- get_file_contents
- get_issue
- get_pull_request
- get_pull_request_comments
- get_pull_request_files
- get_pull_request_reviews
- get_pull_request_status
- list_commits
- list_issues
- list_pull_requests
- merge_pull_request
- push_files
- search_code
- search_issues
- search_repositories
- search_users
- update_issue
- update_pull_request_branch
```

</details>

<details>
<summary><strong>🟢 supabase (19개 도구)</strong> - Supabase 백엔드 및 데이터베이스 관리</summary>

```
- apply_migration
- supabasecreate_branch
- delete_branch
- deploy_edge_function
- execute_sql
- generate_typescript_types
- get_advisors
- get_anon_key
- get_logs
- get_project_url
- list_branches
- list_edge_functions
- list_extensions
- list_migrations
- list_tables
- merge_branch
- rebase_branch
- reset_branch
- search_docs
```

</details>

<details>
<summary><strong>🟢 figma (2개 도구)</strong> - Figma 디자인 데이터 연동</summary>

```
- download_figma_images
- get_figma_data
```

</details>
