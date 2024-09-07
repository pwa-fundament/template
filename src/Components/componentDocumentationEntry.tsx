import "./componentDocumentationEntry.css";

import * as React from "@pwa-fundament/reactivity";

import { CodeBlock } from "./codeBlock";

export function ComponentDocumentationEntry(
  title: string,
  description: string | HTMLElement,
  exampleCode: string,
  language: string
) {
  const example: HTMLElement = <div></div>;
  example.innerHTML = exampleCode;

  return (
    <div class="surface">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {CodeBlock(exampleCode, language)}
        <div class="component-example">{example}</div>
      </div>
    </div>
  );
}
