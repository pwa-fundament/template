import * as React from "@pwa-fundament/reactivity";

export function Icon(iconName: string): HTMLSpanElement {
  return <span class="icon">{iconName}</span>;
}
