/// <reference types="astro/client" />

// 声明SVG模块类型
declare module "*.svg" {
  const content: {
    src: string;
    width: number;
    height: number;
  };
  export default content;
}