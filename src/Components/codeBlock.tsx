import "prismjs/themes/prism-okaidia.css";

import * as React from "@pwa-fundament/reactivity";

import Prism from "prismjs";

export function CodeBlock(code: string, language: string) {
  const languageClass: string = `language-${language}`;
  const codeElement: HTMLElement = <code class={languageClass}>{code}</code>;
  Prism.highlightElement(codeElement);
  return <pre>{codeElement}</pre>;
}
