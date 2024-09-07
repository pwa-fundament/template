import * as React from "@pwa-fundament/reactivity";

import { Page, changePage } from "../Main/viewRoot";

import { Icon } from "@pwa-fundament/components";

export function Header(title: string) {
  function closePage() {
    changePage(Page.StartPage);
  }

  return (
    <header>
      <button class="standard square" on:click={closePage}>
        {Icon("arrow_back")}
      </button>
      <b>{title}</b>
    </header>
  );
}
