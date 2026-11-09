# 이주형 건축 포트폴리오

Astro로 만든 정적 사이트예요. `main` 브랜치에 올리면 GitHub Pages에 자동으로 공개돼요.

## 프로젝트 추가하기

1. `src/content/projects/` 안에 새 폴더를 만들어요. 이름은 영문 소문자와 숫자, `-`만 써요 (예: `03-seongsu-house`). 이 이름이 주소가 돼요: `/projects/03-seongsu-house/`
2. 새 폴더에 `index.md`를 만들고 아래 "index.md 틀"을 붙여 넣어 내용을 고쳐요.
3. 이미지를 같은 폴더에 넣어요.
   - `cover`: 홈 왼쪽에 나올 렌더 또는 사진
   - `coverDrawing`: 홈 오른쪽에 나올 대표 도면
   - `photos`: 상세 페이지 사진 (적은 순서대로 나와요)
   - `drawings`: 상세 페이지 도면과 설명 (예: `배치도 1:500`)
4. `number`가 클수록 홈에서 위에 나와요. 아직 공개하기 싫으면 `draft: true`로 두세요.

GitHub 웹사이트에서 해도 돼요: 저장소에서 `src/content/projects`로 들어가 **Add file → Upload files**로 폴더째 끌어다 놓고 **Commit changes**를 누르면 몇 분 뒤 사이트에 반영돼요.

## index.md 틀

```
---
number: 1
title: "프로젝트명"
summary: "한 줄 소개"
year: "2026"
location: "도시, 국가"
use: "용도"
area: "규모"
status: "완공"
role: "나의 역할"
credits: "함께한 사람·사무소"
photographer: "촬영자"
cover: ./cover.jpg
coverDrawing: ./cover-drawing.png
photos:
  - ./photo-01.jpg
drawings:
  - image: ./drawing-01.png
    caption: "1층 평면도 1:200"
draft: false
---

설명 글을 여기에 써요. 문단 사이에는 빈 줄을 하나 둬요.
```

없는 항목(규모, 크레딧 등)은 줄째로 지워도 돼요.

## 그 밖에 고칠 곳

- 첫 화면 영상: `public/hero/main.mp4`(16:9, 3840×2160 권장)와 정지 화면 `main.jpg`를 같은 이름으로 바꿔 넣어요. 이름을 바꾸려면 `src/pages/index.astro`의 `heroVideo`를 고쳐요.
- 사진 페이지: `src/photos/`에 사진을 넣어요. 파일 이름 순서대로 나와요.
- 이름, 이메일, 링크: `src/site.ts`
- 소개 페이지: `src/pages/about.astro`

## 내 컴퓨터에서 미리 보기 (선택)

```
npm install
npm run dev
```
