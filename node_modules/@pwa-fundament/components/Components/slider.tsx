import * as React from "@pwa-fundament/reactivity";

export function Slider(
    value: React.State<number>,
    min: number = 0,
    max: number = 100,
    step: number = 1,
): HTMLInputElement {
    const valueDiv: HTMLDivElement = <div></div>;
    value.subscribe((newValue) => {
        const valueInPercent = (newValue / max) * 100;
        valueDiv.style.width = `${valueInPercent}%`;
    });

    return (
        <div class="slider-wrapper">
            {valueDiv}
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                bind:value={value}
            ></input>
        </div>
    );
}
