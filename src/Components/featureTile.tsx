import * as React from "@pwa-fundament/reactivity";

import { Icon } from "@pwa-fundament/components";

export default function FeatureTile(
  iconName: string,
  title: string,
  description: string
) {
  return (
    <div class="surface feature-tile">
      {Icon(iconName)}
      <div>
        <b>{title}</b>
        <p class="secondary">{description}</p>
      </div>
    </div>
  );
}
