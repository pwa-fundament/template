import "./startPage.css";

import * as React from "@pwa-fundament/reactivity";

import { Page, PageHiddenState } from "./viewRoot";
import {
  SplitView,
  createSplitViewEntry,
} from "@pwa-fundament/components/Components/splitView";

import Header from "../Components/header";

export default function ComponentPage(selectedPage: React.State<Page>) {
  // ROUTING
  const isHidden = new PageHiddenState(selectedPage, Page.Components);

  return (
    <div style="split-view-page" toggle:hidden={isHidden}>
      {Header("Components")}
      {SplitView([
        createSplitViewEntry(
          "Button",
          <div style="min-height: 90vh">BUTTON</div>
        ),
        createSplitViewEntry(
          "Modal",
          <div style="min-height: 90vh; display: block">MODAL</div>
        ),
      ])}
    </div>
  );
}