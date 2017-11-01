declare module '*.json' {
  export interface JSON {
    [key: number]: object;
  }
}

declare module '*.css' {
  const value: string;
  export default value;
}