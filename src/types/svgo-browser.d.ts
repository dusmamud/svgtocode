declare module 'svgo/dist/svgo.browser.js' {
  export function optimize(
    input: string,
    config?: unknown,
  ): { data: string };
  const svgo: unknown;
  export default svgo;
}
