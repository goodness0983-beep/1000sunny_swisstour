import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F3EE",
        ink: "#1B1D1F",
        rail: "#E30613",
        slate: {
          DEFAULT: "#212F3B",
          light: "#2C3E4A",
        },
        glacier: "#6E93A6",
        stone: "#C7C1B3",
        // LINE 官方品牌綠，專門保留給「加入好友 / LINE 諮詢」按鈕使用，
        // 與網站主色（瑞士紅／阿爾卑斯藍）區隔，讓行動呼籲一眼可辨識。
        line: {
          DEFAULT: "#06C755",
          dark: "#05A648",
        },
      },
      fontFamily: {
        display: ["var(--font-serif-tc)", "Noto Serif TC", "serif"],
        body: ["var(--font-sans-tc)", "Noto Sans TC", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
