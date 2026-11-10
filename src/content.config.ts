import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 프로젝트 하나 = src/content/projects 안의 폴더 하나 (index.md + 이미지들)
const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      number: z.number(),               // 목록 번호 (큰 번호가 위에 표시)
      title: z.string(),                // 프로젝트명
      titleEn: z.string().optional(),   // 영문 프로젝트명
      summary: z.string().optional(),   // 한 줄 소개
      year: z.string(),                 // 연도 (예: "2023–2025")
      location: z.string(),             // 위치
      use: z.string().optional(),       // 용도
      area: z.string().optional(),      // 규모
      status: z.string().optional(),    // 상태 (완공, 계획안 등)
      role: z.string().optional(),      // 나의 역할
      credits: z.string().optional(),   // 함께한 사람·사무소
      photographer: z.string().optional(), // 사진 촬영자
      cover: image(),                   // 홈 왼쪽: 렌더 또는 사진
      coverDrawing: image(),            // 홈 오른쪽: 대표 도면
      photos: z.array(image()).default([]),
      drawings: z
        .array(z.object({ image: image(), caption: z.string().optional() }))
        .default([]),
      draft: z.boolean().default(false), // true면 사이트에 안 보임
    }),
});

// 노트 하나 = src/content/notes 안의 .md 파일 하나 (이미지가 있으면 폴더/index.md)
const notes = defineCollection({
  loader: glob({ pattern: ['*.md', '*/index.md'], base: './src/content/notes' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),                          // 제목 (단상은 짧게)
      date: z.coerce.date(),                      // 쓴 날짜 (예: 2026-11-10)
      kind: z.enum(['단상', '사색', '탐구']),       // 종류
      summary: z.string().optional(),             // 목록에 보일 한 줄 (사색·탐구)
      cover: image().optional(),                  // 대표 이미지 (선택)
      related: z.string().optional(),             // 관련 프로젝트 폴더 이름 (예: 03-seongsu-house)
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, notes };
