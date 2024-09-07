import "./startPage.css";

import * as React from "@pwa-fundament/reactivity";

import { Page, PageHiddenState } from "./viewRoot";
import { SplitView, createSplitViewEntry } from "../Components/splitView";

import { ComponentDocumentationEntry } from "../Components/componentDocumentationEntry";
import { Header } from "../Components/header";

export default function ComponentPage(selectedPage: React.State<Page>) {
  // ROUTING
  const isHidden = new PageHiddenState(selectedPage, Page.Components);

  return (
    <div style="split-view-page" toggle:hidden={isHidden}>
      {Header("Components")}
      {SplitView([
        createSplitViewEntry(
          "Button",
          ComponentDocumentationEntry(
            "Button",
            "Blabla",
            `<button class="standard">Normal Button</button>
<button class="primary">Primary Button</button>
<button class="danger">Dangerous Button</button>`,
            "html"
          )
        ),
        createSplitViewEntry(
          "Button",
          ComponentDocumentationEntry(
            "Button",
            "Blabla",
            `<button class="standard">Normal Button</button>
<button class="primary">Primary Button</button>
<button class="danger">Dangerous Button</button>`,
            "html"
          )
        ),
      ])}
    </div>
  );
}
