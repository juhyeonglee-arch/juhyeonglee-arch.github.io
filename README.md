# 이주형 건축 포트폴리오

Astro로 만든 정적 사이트예요. `main` 브랜치에 올리면 GitHub Pages에 자동으로 공개돼요.

## 프로젝트 추가하기

1. `src/content/projects/` 안에 새 폴더를 만들어요. 이름은 영문 소문자와 숫자, `-`만 써요 (예: `03-seongsu-house`). 이 이름이 주소가 돼요: `/projects/03-seongsu-house/`
2. 기존 프로젝트 폴더의 `index.md`를 복사해 새 폴더에 넣고 내용을 고쳐요.
3. 이미지를 같은 폴더에 넣어요.
   - `cover`: 홈 왼쪽에 나올 렌더 또는 사진
   - `coverDrawing`: 홈 오른쪽에 나올 대표 도면
   - `photos`: 상세 페이지 사진 (적은 순서대로 나와요)
   - `drawings`: 상세 페이지 도면과 설명 (예: `배치도 1:500`)
4. `number`가 클수록 홈에서 위에 나와요. 아직 공개하기 싫으면 `draft: true`로 두세요.

GitHub 웹사이트에서 해도 돼요: 저장소에서 `src/content/projects`로 들어가 **Add file → Upload files**로 폴더째 끌어다 놓고 **Commit changes**를 누르면 몇 분 뒤 사이트에 반영돼요.

## 그 밖에 고칠 곳

- 첫 화면 영상: `public/hero/` 안의 `intro`, `map`, `model`, `graph` (.mp4 영상과 같은 이름의 .jpg 정지 화면). 같은 이름으로 바꿔 넣으면 돼요.
- 사진 페이지: `src/photos/`에 사진을 넣어요. 파일 이름 순서대로 나와요.
- 이름, 이메일, 링크: `src/site.ts`
- 소개 페이지: `src/pages/about.astro`

## 내 컴퓨터에서 미리 보기 (선택)

```
npm install
npm run dev
```
