import "material-symbols";

import * as React from "@pwa-fundament/reactivity";

export function Icon(iconName: string): HTMLSpanElement {
  return <span class="material-symbols-sharp">{iconName}</span>;
}
