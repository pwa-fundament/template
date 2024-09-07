import * as React from "@pwa-fundament/reactivity";

import { Icon } from "@pwa-fundament/components";

export function DocumentationLink(
  iconName: string,
  title: string,
  description: string,
  action: () => void
) {
  return (
    <button class="standard documentation-link" on:click={action}>
      {Icon(iconName)}
      <div>
        <b>{title}</b>
        <span class="secondary">{description}</span>
      </div>
      {Icon("arrow_forward")}
    </button>
  );
}
