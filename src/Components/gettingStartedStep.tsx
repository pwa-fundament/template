import * as React from "@pwa-fundament/reactivity";

export function GettingStartedStep(
  number: number,
  description: HTMLElement,
) {
  return (
    <div class="getting-started-step">
      <span class="number">{number}</span>
      {description}
    </div>
  );
}
