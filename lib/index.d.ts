declare const cap: (str: string) => string;

declare const g_cap: typeof cap;
declare namespace g {
  export {
    g_cap as cap,
  };
}

export { cap, g as default };
